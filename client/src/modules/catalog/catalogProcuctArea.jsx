import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

class CatalogProductArea extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <Row>
        Products

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogProductArea);
