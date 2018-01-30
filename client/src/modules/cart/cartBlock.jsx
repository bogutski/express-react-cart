import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';

class CartBlock extends Component {
  notEmptyCart() {
    return (
      <Button color="primary" outline>
        {this.props.cart.totalCount} {this.props.cart.totalCount > 1 ? 'items' : 'item'}
        {' '}
        <Badge
          color="secondary"
        >${this.props.cart.totalPrice}
        </Badge>
      </Button>
    );
  }

  render() {
    return this.props.cart.totalCount > 0
      ? this.notEmptyCart()
      : <span>Empty cart</span>;
  }
}


const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartBlock);
