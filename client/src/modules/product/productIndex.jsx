import React, { Component } from 'react';
import ProductCreateForm from './productForm';
import ProductList from './productList';

class ProductIndex extends Component {
  render() {
    return (
      <div>
        <ProductCreateForm />
        <ProductList />
      </div>
    );
  }
}

export default ProductIndex;
