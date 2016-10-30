import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-top">
        <ul>
          <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
          <li><Link to="about" activeClassName="active">about</Link></li>
          <li><Link to="courses" activeClassName="active">courses</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
