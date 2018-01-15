import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'reactstrap';
import _ from 'lodash';
import { required } from './../../form/validators';
import { TextField } from './../../form/form';
import Pre from './../../pre/pre';
import {
  cancelEditTerm, vocabularAddTermToRoot,
  vocabularUpdateTerm,
} from '../_actions/vocabularActions';

class VocabularTermForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.cancelEditTerm = this.cancelEditTerm.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const node = this.props.editedTerm;

    const term = {
      ...this.props.termForm.values,
    };

    if (_.isEmpty(this.props.editedTerm)) {
      this.props.vocabularAddTermToRoot(term);
    } else {
      this.props.vocabularUpdateTerm(node, term, this.props.editedTerm.path);
    }
  }

  cancelEditTerm() {
    this.props.cancelEditTerm();
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
        <div>

          <Button
            type="submit"
            color="primary"
            disabled={this.props.termForm && {}.hasOwnProperty.call(this.props.termForm, 'syncErrors')}
          >{_.isEmpty(this.props.editedTerm) ? 'Add to root' : 'Save'}
          </Button>

          {' '}

          {!_.isEmpty(this.props.editedTerm) ?
            <Button
              type="button"
              outline
              color="secondary"
              onClick={() => this.props.cancelEditTerm()}
            >Cancel
            </Button>
            : null}
        </div>

        <Pre obj={this.props.editedTerm} />

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
  vocabularUpdateTerm: (node, term, path) => dispatch(vocabularUpdateTerm(node, term, path)),
  cancelEditTerm: () => dispatch(cancelEditTerm()),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'term' }),
)(VocabularTermForm);
