import React, { Component } from 'react';
import Courts from './Courts';
import '../Styles/body.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.courts = props.courts;
  }

  render() {
    return (
      <div className="body">
        <Courts
          courts={this.courts}
        />
      </div>
    )
  }
}

export default Body;
