import React, { Component } from 'react';

class ProductViewPrice extends Component {
  render() {
    return (
      <div>
        <span>{this.props.price}</span>
      </div>
    );
  }
}

export default ProductViewPrice;
