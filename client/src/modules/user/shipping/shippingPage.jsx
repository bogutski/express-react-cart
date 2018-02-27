import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ShippingForm from './form/shippingForm';

class ShippingPage extends Component {
  render() {
    return (
      <Row>
        <Col>
          <ShippingForm />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  // productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  // productGetById: productId => dispatch(productGetById(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
