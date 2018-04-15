import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { TextField } from '../utils/form/form';
import { email as validEmail, required } from '../utils/form/validators';
import { userLogin } from './_actions/userActions';

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userLoginForm.values.email;
    const password = this.props.userLoginForm.values.password;
    this.props.userLogin(email, password);
  }

  form() {
    return (
      <Row>

        <Col sm={6}>

          <Form onSubmit={this.formSubmit}>

            <Helmet>
              <title>Login</title>
            </Helmet>

            <h1>User Login</h1>
            qwe@qwe.qwe
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
              validate={[required]}
            />

            <Button
              type="submit"
              color="primary"
              disabled={this.props.userLoginForm && {}.hasOwnProperty.call(this.props.userLoginForm, 'syncErrors')}
              value="Register"
            >Login
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        {_.isEmpty(this.props.userInfo)
          ? this.form()
          : <Redirect to="/" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoginForm: state.form.userLogin,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  userLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'userLogin' }),
)(UserLoginForm);
