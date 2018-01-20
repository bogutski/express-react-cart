import React from 'react';
import { Col } from 'reactstrap';
import MainMenu from '../modules/navigation/mainMenu';
import CatalogFirstLevelMenu from './../modules/catalog/catalogFirstLevelMenu';

const Header = () => (
  <Col sm="12">
    <MainMenu />
    <CatalogFirstLevelMenu />
  </Col>
);

export default Header;
