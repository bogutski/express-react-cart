import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productGetById } from './../_actions/productActions';
import Pre from './../../pre/pre';
import ProductViewPrice from './productViewPrice';

class ProductView extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;

    if (productId) {
      this.props.productGetById(productId);
    }
  }

  render() {
    console.log(this.props.productInfo);
    return (
      <div>
        <h1>{this.props.productInfo.name}</h1>

        <ProductViewPrice price={this.props.productInfo.price} />

        <Pre obj={this.props.productInfo} on />
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
