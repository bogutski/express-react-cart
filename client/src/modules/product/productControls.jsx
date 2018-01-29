import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class ProductControls extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/product/add" className="nav-link">Create product</NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default ProductControls;
