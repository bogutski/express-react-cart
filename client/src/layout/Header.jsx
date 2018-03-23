import React from 'react';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';
import SearchResults from './../modules/search/searchResults';

const Header = () => (
  <div>
    <div id="main-bar">
      <MainMenu />
      <SearchResults />
    </div>

    <div id="catalog-bar">
      <CatalogFirstLevelMenu />
    </div>
  </div>
);

export default Header;
