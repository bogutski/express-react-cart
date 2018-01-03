import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { email as validEmail, minLength5, required } from './../form/validators';
import { userRegister } from './_actions/userActions';

class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    this.props.userRegister(email, password);
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h3>User Register</h3>
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
          disabled={this.props.userRegisterForm && {}.hasOwnProperty.call(this.props.userRegisterForm, 'syncErrors')}
          value="Register"
        >Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  userRegisterForm: state.form.userRegister,
});

const mapDispatchToProps = dispatch => ({
  userRegister: (email, password) => dispatch(userRegister(email, password)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'userRegister' }),
)(UserRegisterForm);
