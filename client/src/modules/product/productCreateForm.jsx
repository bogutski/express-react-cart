import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { email as validEmail, minLength5, required } from './../form/validators';
import { productCreate } from './_actions/productActions';

class ProductCreateForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    this.props.productCreate(product);
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h3>Product Create</h3>
        <Field
          name="email"
          type="text"
          placeholder="Email"
          component={TextField}
          validate={[required, validEmail]}
        />

        <Field
          placeholder="Password"
          name="password"
          component={TextField}
          type="password"
          validate={[required, minLength5]}
        />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.productCreateForm && {}.hasOwnProperty.call(this.props.productCreateForm, 'syncErrors')}
        >Create product
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  productCreateForm: state.form.productCreate,
});

const mapDispatchToProps = dispatch => ({
  productCreate: product => dispatch(productCreate(product)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'productCreate' }),
)(ProductCreateForm);
