import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'reactstrap';
import _ from 'lodash';
import { required } from './../../form/validators';
import { TextField } from './../../form/form';
import { vocabularAddTermToRoot, vocabularUpdateTerm } from '../_actions/vocabularActions';

class VocabularTermForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const term = {
      name: this.props.termForm.values.name,
    };

    if (_.isEmpty(this.props.editedTerm)) {
      this.props.vocabularAddTermToRoot(term);
    } else {
      this.props.vocabularUpdateTerm(term, this.props.editedTerm.path);
    }
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
        >
          {_.isEmpty(this.props.editedTerm)
            ? 'Add to root'
            : 'Save'
          }
        </Button>

        {!_.isEmpty(this.props.editedTerm) ?
          <Button
            type="button"
            color="secondary"
          >Cancel
          </Button>
          : null}

        <hr />

        {JSON.stringify(this.props.editedTerm, 0, 2)}

      </Form>
    );
  }
}


const mapStateToProps = state => ({
  termForm: state.form.term,
  editedTerm: state.vocabular.editedTerm,
});

const mapDispatchToProps = dispatch => ({
  vocabularAddTermToRoot: term => dispatch(vocabularAddTermToRoot(term)),
  vocabularUpdateTerm: (term, path) => dispatch(vocabularUpdateTerm(term, path)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'term' }),
)(VocabularTermForm);
