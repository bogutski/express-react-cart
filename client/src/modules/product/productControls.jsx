import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductControls extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link to="/product/add" className="nav-link">Create product</Link>
        </NavItem>
      </Nav>
    );
  }
}

export default ProductControls;
