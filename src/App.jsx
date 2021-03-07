import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Retro from './components/Retro';
import TodoList from './components/Todo';
import Weather from './components/Weather';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Navigation}>
        <NavLink to='/todo' activeClassName={styles.currentPage}>
          Todo
        </NavLink>
        <NavLink to='/retro' activeClassName={styles.currentPage}>
          Retro
        </NavLink>
        <NavLink to='/weather' activeClassName={styles.currentPage}>
          Weather
        </NavLink>
      </div>
      <div className={styles.Wrapper}>
        <Switch>
          <Route path='/weather' component={Weather} />
          <Route path='/retro' component={Retro} />
          <Route path='/todo' component={TodoList} />
          <Route path='*' render={() => <Redirect to='/weather' />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
