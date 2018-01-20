import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class SiteMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>

        <NavItem>
          <Link
            to={{
              pathname: '/catalog',
              state: {
                component: 'catalog',
              },
            }}
            className="nav-link"
          >Catalog
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/vocabular" className="nav-link">Vocaburars</Link>
        </NavItem>

        <NavItem>
          <Link to="/product/list" className="nav-link">Products</Link>
        </NavItem>
      </Nav>
    );
  }
}

export default SiteMenu;
