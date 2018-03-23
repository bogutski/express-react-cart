import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

class CatalogNameFromId extends Component {
  render() {
    return (
      <Row>

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogNameFromId);
