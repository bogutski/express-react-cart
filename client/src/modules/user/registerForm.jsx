import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { minLength5, required, email } from './../form/validators';

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
          placeholder="Email"
          component={TextField}
          validate={[required, email]}
        />

        <Field
          placeholder="Password"
          name="password"
          component={TextField}
          type="password"
          validate={[required, minLength5]}
        />

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'userRegister' }),
)(UserRegisterForm);
