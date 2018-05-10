import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SiteMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink
            to="/catalog"
            activeClassName="active"
            className="nav-link"
          >Catalog
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/vocabular"
            activeClassName="active"
            className="nav-link"
          >Vocabulars
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/product/list"
            activeClassName="active"
            className="nav-link"
          >Products
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/offers/list"
            activeClassName="active"
            className="nav-link"
          >Offers
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default SiteMenu;
