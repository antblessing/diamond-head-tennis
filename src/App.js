import React, { Component } from 'react';
import './App.css';
import tennis from './tennis.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Body />
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

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="date">
          <input type="date"></input>
          <input type="submit" value="Check Courts"></input>
        </div>
        <div className="court">
          <img alt="court" src={require('./court.svg')} style={{backgroundColor: 'red' ,height: '208px',width: '150px'}}></img>
        </div>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="headline">Diamond Hills Tennis</h1>
        <div className="button-container">
          <Button> Open Courts </Button>
          <Button> Open Matches </Button>
          <Button> Find a friend </Button>
        </div>
      </div>
    )
  }
}

const Button = ({children}) => 
  <button>{children}</button>

export default App;
