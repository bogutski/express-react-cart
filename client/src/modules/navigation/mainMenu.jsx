import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import SiteMenu from './siteMenu';
import UserSection from '../user/userSection';
import CartBlock from '../cart/cartBlock';

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
        <NavbarBrand id="site-name">React Cart</NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar id="site-menu">
          <SiteMenu />
        </Collapse>

        <Collapse isOpen={this.state.isOpen} navbar>
          <CartBlock />
        </Collapse>

        <Collapse isOpen={this.state.isOpen} navbar id="user-section">
          <UserSection />
        </Collapse>

      </Navbar>
    );
  }
}

export default MainMenu;
