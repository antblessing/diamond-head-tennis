import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import '../Styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="headline">Diamond Hills Tennis</h1>
        <Container>
          <Button color="primary"> Open Courts </Button>
          <Button color="primary"> Open Matches </Button>
          <Button color="primary"> Find a friend </Button>
        </Container>
      </div>
    )
  }
}

export default Header;
