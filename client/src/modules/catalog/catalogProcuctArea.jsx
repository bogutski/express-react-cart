import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import Pre from './../pre/pre';

class CatalogProductArea extends Component {
  render() {
    return (
      <Row>

        <Pre obj={this.props.router} on />

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogProductArea);
