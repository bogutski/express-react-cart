import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../utils/form/form';
import { searchInputValue } from './_actions/searchActions';

class SearchField extends Component {
  render() {
    return (
      <Field
        onChange={e => this.props.searchInputValue(e.target.value)}
        name="search"
        type="text"
        placeholder="Search"
        component={TextField}
      />
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  searchInputValue: value => dispatch(searchInputValue(value)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'search' }),
)(SearchField);
