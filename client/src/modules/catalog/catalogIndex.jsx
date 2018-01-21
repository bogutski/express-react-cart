import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CatalogProcuctArea from './catalogProcuctArea';
import CatalogSecondLevelMenu from './catalogSecondLevelMenu';

class Catalog extends Component {
  render() {
    return (
      <Row>

        <Col md={2}>
          <CatalogSecondLevelMenu />
        </Col>

        <Col md={10}>
          <h1>Catalog</h1>
          <CatalogProcuctArea />
        </Col>

      </Row>
    );
  }
}

export default Catalog;
