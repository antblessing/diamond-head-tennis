import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import '../Styles/body.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.courts = props.courts;
  }

  renderCourt(court) {
    let color = 'court-open';

    if (court.reserved) {
      color = 'court-reserved';
    }
    return (
        <Court
          reserved={court.reserved}
          className={color}
          players={court.players}
        />
    )
  }

  render() {

    return (
      <div className="body">
        <div className="court-container">
          {this.courts.map((court) => {
            return this.renderCourt(court)
          })}
        </div>
      </div>
    )
  }
}

function Court(props) {
  function canReserve() {
    if (!props.reserved) {
      return <Button>Reserve</Button>
    }
  }
  return (
    <div className="court">
      {props.court}
      <img
        alt="court"
        src={require('../court.svg')}
        onClick={() => alert(props.reserved)}
        className={"court-img" + " "+ props.className}
        >
      </img>
      {canReserve()}
    </div>
  );
}

export default Body;
