import React from 'react';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';

const Header = () => (
  <div className='mb-4'>
    <div id="main-bar">
      <MainMenu />
    </div>

    <div id="catalog-bar">
      <CatalogFirstLevelMenu />
    </div>
  </div>
);

export default Header;
