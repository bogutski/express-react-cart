import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { required, number } from './../form/validators';
import { productCreate, productUpdate, getProductById } from './_actions/productActions';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.id;

    if (productId) {
      this.props.getProductById(productId);
    } else {
      // this.props.clearProductForm();
    }
  }


  formSubmit(e) {
    e.preventDefault();

    const productId = this.props.match.params.id;
    const data = {
      ...this.props.productForm.values,
    };

    if (productId) {
      this.props.productUpdate(productId, data);
    } else {
      this.props.productCreate(data);
    }
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h3>Product</h3>
        <Field
          name="name"
          type="text"
          placeholder="Product name"
          component={TextField}
          validate={[required]}
        />

        <Field
          name="price"
          type="text"
          placeholder="Price"
          component={TextField}
          validate={[required, number]}
        />

        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.productForm && {}.hasOwnProperty.call(this.props.productForm, 'syncErrors')}
        >Save
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  getProductById: productId => dispatch(getProductById(productId)),
  productCreate: product => dispatch(productCreate(product)),
  productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'product' }),
)(ProductForm);
