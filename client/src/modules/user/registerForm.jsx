import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { minLength2, required } from './../form/validators';

class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Field
          name="email"
          type="text"
          label="Email"
          component={TextField}
          descr="Description here"
          validate={[minLength2, required]}
        />

        <Field name="password" component={TextField} type="password"/>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({form: 'userRegister'}),
)(UserRegisterForm);
