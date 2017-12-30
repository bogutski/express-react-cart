import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <Nav className="nav justify-content-end">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Log Out</Link>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainMenu);
