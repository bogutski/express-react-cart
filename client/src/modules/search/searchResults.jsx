import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchResults extends Component {

  render() {
    return (
      <ul>
        {this.props.searchProductList.map(el => <li>{el.name}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  searchProductList: state.search.searchProductList,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
