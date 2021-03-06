import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Retro from './components/Retro';
import TodoList from './components/Todo';
import Weather from './components/Weather';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Navigation'>
        <Link to='/todo'>Todo</Link>
        <Link to='/retro'>Retro</Link>
        <Link to='/weather'>Weather</Link>
      </div>
      <Switch>
        <Route path='/weather' component={Weather} />
        <Route path='/retro' component={Retro} />
        <Route path='/todo' component={TodoList} />
        <Route path='*' render={() => <Redirect to='/weather' />} />
      </Switch>
    </div>
  );
}

export default App;
