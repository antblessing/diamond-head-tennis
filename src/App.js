import React, { Component } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Body from './Components/Body';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courts: [{reserved: true,players: ["Anthony"]},{reserved: false,players: []},{reserved: false,players: []}]
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

export default App;
