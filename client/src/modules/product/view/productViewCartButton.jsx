import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { cartProductAdd } from './../../cart/_actions/cartActions';

class ProductViewCartButton extends Component {
  render() {
    return (
      <div>

        <Button
          size={this.props.size}
          color={this.props.color}
          onClick={() => this.props.cartProductAdd(this.props.product, 1)}
        >{this.props.text}
        </Button>

      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  cartProductAdd: (productId, qt) => dispatch(cartProductAdd(productId, qt)),
});

ProductViewCartButton.defaultProps = {
  text: 'Add to cart',
  size: null,
  color: 'warning',
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewCartButton);
