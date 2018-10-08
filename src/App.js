import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Page1 from './components/Page1/Page1';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

const Page = () => (
  <Page1 />
);

const Login = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Page} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
