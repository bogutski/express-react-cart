import React, { Component } from 'react';
import { Row, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pre from './../pre/pre';

class CatalogProcuctArea extends Component {
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
});

export default connect(mapStateToProps)(CatalogProcuctArea);
