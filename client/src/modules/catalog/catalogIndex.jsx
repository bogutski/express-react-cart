import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CatalogProcuctArea from './catalogProcuctArea';
import CatalogSecondLevelMenu from './catalogSecondLevelMenu';
import Pre from './../pre/pre';
import CatalogSecondLevelCards from './catalogSecondLevelCards';

class Catalog extends Component {
  render() {
    return (
      <Row>

        <Col md={2}>
          <CatalogSecondLevelMenu />
        </Col>

        <Col md={10}>
          <h1>Catalog</h1>

          <CatalogSecondLevelCards />

          <CatalogProcuctArea />

          <Pre obj={this.props.match} on />

        </Col>

      </Row>
    );
  }
}

export default Catalog;
