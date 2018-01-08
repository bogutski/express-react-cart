import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextField } from './../form/form';
import { required } from './../form/validators';
import { vocabularCreate } from './_actions/vocabularActions';

class VocabularCreateForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const vocabular = {
      name: this.props.vocabularForm.values.name,
    };

    this.props.vocabularCreate(vocabular);
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h3>Vocabular Create</h3>
        <Field
          name="name"
          type="text"
          placeholder="Vocabular name"
          component={TextField}
          validate={[required]}
        />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.vocabularForm && {}.hasOwnProperty.call(this.props.vocabularForm, 'syncErrors')}
        >Save
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  vocabularForm: state.form.vocabular,
});

const mapDispatchToProps = dispatch => ({
  vocabularCreate: vocabular => dispatch(vocabularCreate(vocabular)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'vocabular' }),
)(VocabularCreateForm);
