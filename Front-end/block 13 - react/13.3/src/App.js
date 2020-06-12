// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/algum-user1234">Users</Link>
        <Link to="/strict-acess">Strict Acess</Link>

        <Switch>
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage={'Morning'} />}
          />
          <Route
            path="/strict-acess"
            render={(props) => <StrictAccess {...props} user="Alex" pw='1234' />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
