import { BrowserRouter, Link, Route } from 'react-router-dom';
import Retro from './components/Retro';
import TodoList from './components/Todo';
import Weather from './components/Weather';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='Navigation'>
          <Link to='/todo'>Todo</Link>
          <Link to='/retro'>Retro</Link>
          <Link to='/weather'>Weather</Link>
        </div>
        <Route path='/weather' component={Weather} />
        <Route path='/retro' component={Retro} />
        <Route path='/todo' component={TodoList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
