import React from 'react';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';

const Header = () => (
  <div>
    <div id="main-menu">
      <MainMenu />
    </div>

    <div id="catalog-menu">
      <CatalogFirstLevelMenu />
    </div>
  </div>
);

export default Header;
