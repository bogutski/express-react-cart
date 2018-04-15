import React, { Component } from 'react';

class ProductViewPrice extends Component {
  render() {
    return (
      <span className="price">${this.props.price}</span>
    );
  }
}

export default ProductViewPrice;
