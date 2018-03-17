import React from 'react';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';
import SearchResults from './../modules/search/searchResults';

const Header = () => (
  <div className="mb-4">
    <div id="main-bar">
      <MainMenu />
      <SearchResults />
    </div>

    <div id="catalog-bar" className="box-shadow">
      <CatalogFirstLevelMenu />
    </div>
  </div>
);

export default Header;
