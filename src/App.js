import React, { Component } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import './App.css';


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

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="date">
          <input type="date"></input>
          <input type="submit" value="Check Courts"></input>
        </div>
        <div className="court-container">
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
          <Court />
        </div>
      </div>
    )
  }
}

const Court = () =>
  <div className="court">
    <img
      alt="court"
      src={require('./court.svg')}
      style={{backgroundColor: 'green' ,height: '208px',width: '150px'}}
      onClick={() => alert("Open Court!")}>
    </img>
  </div>

export default App;
