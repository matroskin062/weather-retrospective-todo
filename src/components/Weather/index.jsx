import styles from './Weather.module.css';
import { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ForecastCard from './ForecastCard/ForecastCard';

const API_KEY = '166f41f09442b35e807cb8bce5b3cfe6';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&exclude=minutely,hourly,alerts&units=metric&lang=ru&appid=${API_KEY}`;

function Weather() {
  const [forecast, setForecast] = useState();
  const [current, setCurrent] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const { daily, current } = await response.json();
    setForecast(daily.slice(1));
    setCurrent(current);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.App}>
        {current && <CurrentWeather {...current} />}
        <div className={styles.Forecast}>
          {forecast &&
            forecast.map((el) => <ForecastCard key={el.dt} {...el} />)}
        </div>
      </div>
    </div>
  );
}

export default Weather;
