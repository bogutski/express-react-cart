import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Pre from './../modules/pre/pre';

class Footer extends Component {
  render() {
    return (
      <Row>
        <Col className="d-flex justify-content-center">

          <Pre obj={this.props.match} />

        </Col>
      </Row>);
  }
}

export default Footer;
