import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'reactstrap';
import _ from 'lodash';
import shortid from 'shortid';
import { required } from '../../utils/form/validators';
import { Checkbox, FileField, TextField } from '../../utils/form/form';
import Pre from '../../utils/pre/pre';
import {
  vocabularTermAddToRoot,
  vocabularTermCancelEdit,
  vocabularTermGeneratePath,
  vocabularTermUpdate,
} from '../_actions/vocabularActions';
import ImageUpload from '../../utils/imageUpload/imageUpload';

class VocabularTermForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.vocabularTermCancelEdit = this.vocabularTermCancelEdit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAutopath = this.changeAutopath.bind(this);
  }

  changeName(e) {
    if (
      _.has(this.props, 'termForm.values.autopath')
      && this.props.termForm.values.autopath
      && this.props.termForm.values.name
    ) {
      const node = this.props.termForm.values;
      const termName = e.target.value;
      this.props.vocabularTermGeneratePath(node, termName);
    }
  }

  changeAutopath(e) {
    if (e.target.checked) {
      const node = this.props.termForm.values;

      const termName = _.has(this.props, 'termForm.values.name')
        ? this.props.termForm.values.name
        : '';

      this.props.vocabularTermGeneratePath(node, termName);
    }
  }

  formSubmit(e) {
    e.preventDefault();

    const node = this.props.editedTerm;

    const term = {
      id: shortid.generate(), // Create id. If exist next string will override to prev value
      ...this.props.termForm.values,
    };

    const formData = new FormData();

    Object.keys(term)
      .forEach((el) => {
        formData.append(el, term[el]);
      });

    formData.append('image', term.file[0]);

    if (_.isEmpty(this.props.editedTerm)) {
      this.props.vocabularTermAddToRoot(formData);
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
        <h1>Term</h1>

        <ImageUpload onUpload={v => console.log(v)} />

        <Field
          name="name"
          type="text"
          onChange={this.changeName}
          placeholder="Term name"
          component={TextField}
          validate={[required]}
        />

        <Field
          name="autopath"
          onChange={this.changeAutopath}
          component={Checkbox}
          type="checkbox"
        />

        <Field
          name="path"
          type="text"
          disabled={_.has(this.props, 'termForm.values.autopath') && this.props.termForm.values.autopath}
          placeholder="URL path"
          component={TextField}
          validate={[required]}
        />

        <Field
          name="file"
          type="file"
          onChange={() => console.log('CH')}
          component={FileField}
          multiple
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
  vocabularTermGeneratePath: (node, termName) => dispatch(vocabularTermGeneratePath(node, termName)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'term' }),
)(VocabularTermForm);
