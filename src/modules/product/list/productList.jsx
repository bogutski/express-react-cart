import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProductListTable from './productListTable';
import ProductControls from '../productControls';

class ProductList extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Products</title>
        </Helmet>

        <h1>Products</h1>
        <ProductControls />
        <ProductListTable />
      </div>
    );
  }
}

export default ProductList;
