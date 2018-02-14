import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { cartVisibleToggle } from './_actions/cartActions';
import CartModal from './cartModal';

class CartBlock extends Component {
  notEmptyCart() {
    return (
      <div>

        <Button
          onClick={this.props.cartVisibleToggle}
          color="warning"
          outline
        >
          {this.props.cart.totalCount}{this.props.cart.totalCount > 1 ? ' items' : ' item'}
          {' '}
          <Badge
            color="warning"
          >${this.props.cart.totalPrice}
          </Badge>
        </Button>

        <CartModal />
      </div>
    );
  }

  render() {
    return this.props.cart.totalCount > 0
      ? this.notEmptyCart()
      : <span className="text-muted">Empty cart</span>;
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartVisibleToggle: () => dispatch(cartVisibleToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBlock);
