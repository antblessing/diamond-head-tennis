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
    <div className="nav">
      <div className="nav-element" style={{width: '80%',textAlign: 'left',color: 'orange'}}>Reserve Tennis Court</div>
      <NavElement value="Home" size="5%"/>
      <NavElement value="Log Out" size="7%"/>
      <NavElement value="Account" size="5%"/>     
    </div>
    );
  }
}

const NavElement = ({value, size}) =>
  <div className="nav-element" style={{width: size}}>
    {value}
  </div>

export default App;
