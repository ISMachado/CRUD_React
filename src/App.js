import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
