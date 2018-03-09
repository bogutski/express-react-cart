import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchResults extends Component {
  changeSearch(v) {
    const re = new RegExp(v, 'ig');
    const filtered = this.props.productList.filter(el => el.name.match(re));
    console.log(filtered);
  }

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
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
