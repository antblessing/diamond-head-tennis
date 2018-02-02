import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
    <nav>
      <ul className="container">
        <li className="reserve">Reserve Tennis Court</li>
        <li>Home</li>
        <li>About</li>
        <li>Log out</li>        
      </ul>
    </nav>
    );
  }
}

export default App;
