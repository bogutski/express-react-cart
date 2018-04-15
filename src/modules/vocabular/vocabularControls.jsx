import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class VocabularControls extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link to="/vocabular/add" className="nav-link">Create vocabular</Link>
        </NavItem>
      </Nav>
    );
  }
}

export default VocabularControls;
