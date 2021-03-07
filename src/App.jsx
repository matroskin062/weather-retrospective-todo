import { Redirect, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Retro from './components/Retro';
import TodoList from './components/Todo';
import Weather from './components/Weather';

function App() {
  return (
    <div>
      <Nav />
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
