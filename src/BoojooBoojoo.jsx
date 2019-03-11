import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BoojooBoojoo extends Component {
  render() {
    return (
      <div className="Blah">
        <h1>SUPER BOOJOOOOOO!</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default BoojooBoojoo;
