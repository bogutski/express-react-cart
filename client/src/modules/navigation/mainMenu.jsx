import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SiteMenu from './siteMenu';
import UserSection from '../user/userSection';
import CartBlock from '../cart/cartBlock';
import SearchField from '../search/searchField';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="faded" expand="md">

        <NavLink to="/">
          <span id="site-name">React Cart</span>
        </NavLink>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar id="site-menu">
          <SiteMenu />
        </Collapse>

        <Collapse isOpen={this.state.isOpen} navbar>
          <div className="mr-2">
            <CartBlock />
          </div>
          <SearchField />
        </Collapse>

        <Collapse isOpen={this.state.isOpen} navbar id="user-section">
          <UserSection />
        </Collapse>

      </Navbar>
    );
  }
}

export default MainMenu;
