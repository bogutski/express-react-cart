import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <Nav className="nav justify-content-end">
        <NavItem>
          <Link to="/user/list" className="nav-link">List</Link>
        </NavItem>
        <NavItem>
          <Link to="/user/register" className="nav-link">Register</Link>
        </NavItem>
        <NavItem>
          <Link to="/user/login" className="nav-link">Login</Link>
        </NavItem>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainMenu);
