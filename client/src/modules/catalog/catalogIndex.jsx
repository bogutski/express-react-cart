import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import CatalogProcuctArea from './catalogProcuctArea';
import CatalogSecondLevelMenu from './catalogSecondLevelMenu';
import Pre from './../pre/pre';
import CatalogSecondLevelCards from './catalogSecondLevelCards';

class Catalog extends Component {
  render() {
    return (
      <Row>

        <Helmet>
          <title>Catalog</title>
        </Helmet>


        <Col md={2}>
          <CatalogSecondLevelMenu />
        </Col>

        <Col md={10}>
          <h1>Catalog</h1>

          <CatalogSecondLevelCards />

          { // Show products list only on sublevel
            _.has(this.props, 'match.params.sublevel')
              ? <CatalogProcuctArea />
              : null
          }

          <Pre obj={this.props.match} />

        </Col>

      </Row>
    );
  }
}

export default Catalog;
