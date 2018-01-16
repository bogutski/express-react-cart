import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input } from 'reactstrap';

import _ from 'lodash';
import shortid from 'shortid';
import { required } from './../../form/validators';
import { TextField, Checkbox } from './../../form/form';
import Pre from './../../pre/pre';
import {
  vocabularTermAddToRoot, vocabularTermCancelEdit,
  vocabularTermUpdate,
} from '../_actions/vocabularActions';

class VocabularTermForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.vocabularTermCancelEdit = this.vocabularTermCancelEdit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const node = this.props.editedTerm;

    const term = {
      id: shortid.generate(), // Create id. If exist next string will override to prev value
      ...this.props.termForm.values,
    };

    if (_.isEmpty(this.props.editedTerm)) {
      this.props.vocabularTermAddToRoot(term);
    } else {
      this.props.vocabularTermUpdate(node, term, this.props.editedTerm.path);
    }
  }

  vocabularTermCancelEdit() {
    this.props.vocabularTermCancelEdit();
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

        <Field
          name="authopath"
          component={Checkbox}
          type="checkbox"
        />

        <Field
          name="path"
          type="text"
          placeholder="URL path"
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
              onClick={() => this.props.vocabularTermCancelEdit()}
            >Cancel
            </Button>
            : null}
        </div>

        <Pre obj={this.props.editedTerm} on />

      </Form>
    );
  }
}


const mapStateToProps = state => ({
  termForm: state.form.term,
  editedTerm: state.vocabular.editedTerm,
});

const mapDispatchToProps = dispatch => ({
  vocabularTermAddToRoot: term => dispatch(vocabularTermAddToRoot(term)),
  vocabularTermUpdate: (node, term, path) => dispatch(vocabularTermUpdate(node, term, path)),
  vocabularTermCancelEdit: () => dispatch(vocabularTermCancelEdit()),
  //  vocabularTermGeneratePath: () => dispatch(vocabularTermGeneratePath()),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'term' }),
)(VocabularTermForm);
