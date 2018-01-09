import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Form } from 'reactstrap';
import VocabularTree from './vocabularTree';
import { required } from './../../form/validators';
import { TextField } from './../../form/form';
import { vocabularCreate } from '../_actions/vocabularActions';

class VocabularEditForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    // const vocabular = {
    //   name: this.props.vocabularForm.values.name,
    // };
    //
    // this.props.vocabularCreate(vocabular);
  }


  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <h5>Vocabular Edit</h5>
        <Field
          name="name"
          type="text"
          placeholder="Vocabular name"
          component={TextField}
          validate={[required]}
        />

        <button onClick={() => this.addTerm()}>Add new term</button>

        <VocabularTree />

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
)(VocabularEditForm);
