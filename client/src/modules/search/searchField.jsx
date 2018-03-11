import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import { searchInputValue, searchProductListClear } from './_actions/searchActions';

class SearchField extends Component {
  search(v) {
    const searchString = v.trim();
    if (searchString.length > 2) {
      this.props.searchInputValue(searchString);
    } else {
      this.props.searchProductListClear();
    }
  }

  render() {
    return (
      <InputGroup>
        <Input
          onChange={e => this.search(e.target.value)}
          placeholder="Search"
        />
      </InputGroup>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  searchInputValue: value => dispatch(searchInputValue(value)),
  searchProductListClear: () => dispatch(searchProductListClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
