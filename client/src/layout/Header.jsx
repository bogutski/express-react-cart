import React from 'react';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';

const Header = () => (
  <div className='mb-4'>
    <div id="main-menu">
      <MainMenu />
    </div>

    <div id="catalog-menu">
      <CatalogFirstLevelMenu />
    </div>
  </div>
);

export default Header;
