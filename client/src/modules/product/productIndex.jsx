import React, { Component } from 'react';
import ProductList from './productList';
import ProductControls from './productControls';

class ProductIndex extends Component {
  render() {
    return (
      <div>
        <h5>Products</h5>
        <ProductControls />
        <ProductList />
      </div>
    );
  }
}

export default ProductIndex;
