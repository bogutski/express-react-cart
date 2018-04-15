import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import { productGetById } from './../_actions/productActions';
import ProductViewDetails from './productViewDetails';

class ProductView extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;

    if (productId) {
      this.props.productGetById(productId);
    }
  }

  component() {
    return (
      <div className="wr-tb-1">
        <h1>{this.props.productInfo.name}</h1>

        <ProductViewDetails />

        <NavLink
          to={`/product/edit/${this.props.productInfo._id}`}
          activeClassName="active"
          className="nav-link"
        >Edit
        </NavLink>

      </div>
    );
  }

  render() {
    return (
      <div>
        {
          !_.isEmpty(this.props.productInfo)
            ? this.component()
            : <span>Loading ...</span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productInfo: state.product.productInfo,
});

const mapDispatchToProps = dispatch => ({
  productGetById: productId => dispatch(productGetById(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
