import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchResults extends Component {
  // changeSearch(v) {
  //   const re = new RegExp(v, 'ig');
  //   const filtered = this.props.productList.filter(el => el.name.match(re));
  //   console.log(filtered);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (_.has(nextProps.searchField, 'values.search')) {
  //     console.log(nextProps.searchField.values.search);
  //   }
  // }
  // list() {
  //     if (_.has(nextProps.searchField, 'values.search')) {
  //       console.log(nextProps.searchField.values.search);
  //     }
  // }

  render() {
    return (
      <div>
        Search Results
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  searchField: state.form.search,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
