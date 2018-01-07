import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { required, number } from './../form/validators';
import { productCreate } from './_actions/productActions';

class ProductCreateForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const product = {
      name: this.props.productForm.values.name,
      price: this.props.productForm.values.price,
    };

    this.props.productCreate(product);
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h3>Product Create</h3>
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
  productCreate: product => dispatch(productCreate(product)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'product' }),
)(ProductCreateForm);
