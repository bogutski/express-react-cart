import React, { Component } from 'react';
import ProductListTable from './productListTable';
import ProductControls from './productControls';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h5>Products</h5>
        <ProductControls />
        <ProductListTable />
      </div>
    );
  }
}

export default ProductList;
