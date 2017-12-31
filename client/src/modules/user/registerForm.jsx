import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';


class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  input({ input, meta, label }) {
    return (
      <div>
        <pre>{JSON.stringify(meta, 0, 2)}</pre>
        <pre>{JSON.stringify(input, 0, 2)}</pre>
        <Label for="exampleEmail">Email</Label>
        {label}
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <FormGroup>
          <Field name="email" label="Email" component={this.input} type="text" />
          <Field name="password" component="input" type="password" />

        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({ });

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'userRegister' }),
)(UserRegisterForm);
