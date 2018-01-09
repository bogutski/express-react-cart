import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'reactstrap';
import { required } from './../../form/validators';
import { TextField } from './../../form/form';
import { vocabularCreate } from '../_actions/vocabularActions';

class VocabularTermForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    // const vocabular = {
    //   name: this.props.termForm.values.name,
    // };
    //
    // this.props.vocabularCreate(vocabular);
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h5>Term</h5>
        <Field
          name="name"
          type="text"
          placeholder="Term name"
          component={TextField}
          validate={[required]}
        />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.termForm && {}.hasOwnProperty.call(this.props.termForm, 'syncErrors')}
        >Save
        </Button>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  termForm: state.form.vocabular,
});

const mapDispatchToProps = dispatch => ({
  vocabularCreate: vocabular => dispatch(vocabularCreate(vocabular)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'term' }),
)(VocabularTermForm);
