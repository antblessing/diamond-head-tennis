import React, { Component } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courts: [{reserved: true},{reserved: false}]
    };

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Body
          courts={this.state.courts}
        />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.courts = props.courts;
  }

  renderCourt(i) {
    let color = {backgroundColor: 'green'};

    if (this.courts[i].reserved) {
      color = {backgroundColor: 'red'}
    }
    return (
      <Court
        court={i}
        reserved={this.courts[i].reserved}
        style={color}
      />
    )
  }

  render() {

    return (
      <div className="body">
        {/* <div className="date">
          <input type="date"></input>
          <input type="submit" value="Check Courts"></input>
        </div> */}
        <div className="court-container">
          {this.renderCourt(0)}
          {this.renderCourt(1)}
        </div>
      </div>
    )
  }
}

function Court(props) {
  return (
    <div className="court">
      {props.court}
      <img
        alt="court"
        src={require('./court.svg')}
        onClick={() => alert("Open Court!")}
        className="court-img"
        style={props.style}>
      </img>
    </div>
  );
}

export default App;
