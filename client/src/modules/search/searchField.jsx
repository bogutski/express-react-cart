import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../utils/form/form';

class SearchField extends Component {
  render() {
    return (
      <Field
        onChange={e => console.log(e.target.value)}
        name="search"
        type="text"
        placeholder="Search"
        component={TextField}
      />
    );
  }
}

const mapStateToProps = state => ({
  // productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  // productGetById: productId => dispatch(productGetById(productId)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'search' }),
)(SearchField);
