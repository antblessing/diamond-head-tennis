import React, { Component } from 'react';
import '../Styles/nav.css';

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

export default Nav;
