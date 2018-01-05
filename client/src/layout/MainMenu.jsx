import React, { Component } from 'react';
import UserMenu from './../modules/user/userMenu';

class MainMenu extends Component {
  render() {
    return (
      <div>
        {/* Catalog menu */}
        <UserMenu />
      </div>
    );
  }
}

export default MainMenu;
