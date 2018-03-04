import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import CatalogProcuctArea from './catalogProcuctArea';
import CatalogSecondLevelMenu from './catalogSecondLevelMenu';
import Pre from '../utils/pre/pre';
import CatalogSecondLevelCards from './catalogSecondLevelCards';
import CatalogFirstLevelCards from './catalogFirstLevelCards';

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

          { // Show only on catalog page
            _.get(this.props, 'match.params.level') || <CatalogFirstLevelCards />
          }

          { // Show products list only on sublevel
            _.has(this.props, 'match.params.sublevel') || <CatalogProcuctArea />
          }

          <Pre obj={this.props.match} />

        </Col>

      </Row>
    );
  }
}

export default Catalog;
