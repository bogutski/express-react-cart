import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextField } from '../../../utils/form/form';
import { number, required } from '../../../utils/form/validators';
import Pre from '../../../utils/pre/pre';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props.productForm);
    return (
      <div>
        <h2>Shipping</h2>

        <Form onSubmit={this.formSubmit}>
          <Row>
            <Col xs="12" lg="6">
              <Field
                name="shippingAddress"
                type="text"
                placeholder="Shipping address"
                component={TextField}
                validate={[required]}
              />

              <Field
                name="shippingZip"
                type="text"
                placeholder="ZIP"
                component={TextField}
                validate={[required, number]}
              />

            </Col>

            <Col xs="12" lg="6" className="mt-4 mt-lg-0">
              -
            </Col>

            <Col xl="12">
              <Button
                type="submit"
                color="primary"
                disabled={this.props.productForm && {}.hasOwnProperty.call(this.props.productForm, 'syncErrors')}
              >Save
              </Button>

              <Pre obj={_.get(this.props, 'productForm.values', {})} off />
            </Col>

          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
  productInfo: state.product.productInfo,
  categoryList: state.vocabular.categoryList,
});

const mapDispatchToProps = dispatch => ({
  // productGetById: productId => dispatch(productGetById(productId)),
  // productCreate: product => dispatch(productCreate(product)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'billing' }),
)(ShippingForm);
