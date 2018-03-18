import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { cartProductAdd } from './../../cart/_actions/cartActions';

class ProductViewCartButton extends Component {
  render() {
    return (
      <div>

        <Button
          color="warning"
          onClick={() => this.props.cartProductAdd(this.props.product, 1)}
        >Add to cart
        </Button>

      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  cartProductAdd: (productId, qt) => dispatch(cartProductAdd(productId, qt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewCartButton);
