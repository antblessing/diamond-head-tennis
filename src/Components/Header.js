import React, { Component } from 'react';
import '../Styles/button.css';
import '../Styles/header.css';

const Button = ({children}) =>
  <button>{children}</button>

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="headline">Diamond Hills Tennis</h1>
        <div>
          <Button> Open Courts </Button>
          <Button> Open Matches </Button>
          <Button> Find a friend </Button>
        </div>
      </div>
    )
  }
}

export default Header;
