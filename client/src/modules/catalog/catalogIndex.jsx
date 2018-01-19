import React, { Component } from 'react';
import CatalogFirstLevelMenu from './catalogFirstLevelMenu';
import CatalogProcuctArea from './catalogProcuctArea';

class Catalog extends Component {
  render() {
    return (
      <div>
        <CatalogFirstLevelMenu />
        <CatalogProcuctArea />
      </div>
    );
  }
}

export default Catalog;
