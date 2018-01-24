import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import Pre from './../pre/pre';
import CatalogSecondLevelCards from './catalogSecondLevelCards';

class CatalogProductArea extends Component {
  render() {
    return (
      <Row>

        <CatalogSecondLevelCards />

        <Pre obj={this.props.catalog} />

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogProductArea);
