import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ShippingForm from './form/shippingForm';
import ShippingList from './shippingList';
import { shippingListLoad } from './../_actions/profileActions';

class ShippingPage extends Component {
  componentDidMount() {
    this.props.shippingListLoad();
  }

  render() {
    return (
      <Row>
        <Col xs="12" lg="6">
          <ShippingList />
        </Col>
        <Col xs="12" lg="6">
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
  shippingListLoad: () => dispatch(shippingListLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
