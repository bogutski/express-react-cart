import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { NavLink, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { cartProductRemove, cartVisibleToggle } from './_actions/cartActions';
import Img from './../utils/img/img';

class CartModal extends Component {
  gotoCheckout() {
    this.props.history.push('/checkout');
    this.props.cartVisibleToggle();
  }

  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        accessor: el => (!_.isEmpty(el.image) ? <Img pid={el.image[0].pid} w={100} /> : ''),
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Qt',
        accessor: 'qt',
      },
      {
        Header: 'Subtotal',
        accessor: 'total',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => (
          <div>
            <Button
              color="link"
              size="sm"
              onClick={() => this.props.cartProductRemove(el._id)}
            >Delete
            </Button>
          </div>
        ),
      },
    ];
  }

  render() {
    return (
      <Modal
        className="modal-lg"
        isOpen={this.props.cartVisible}
        toggle={this.props.cartVisibleToggle}
      >
        <ModalHeader toggle={this.props.cartVisibleToggle}>Cart title</ModalHeader>
        <ModalBody>

          <ReactTable
            className="light border"
            resizable={false}
            data={this.props.cart.cart}
            columns={this.columns()}
            minRows={0}
            defaultPageSize={30}
            showPagination={this.props.cart.cart.length > 30}
          />

          {this.props.cart.totalCount}{this.props.cart.totalCount > 1 ? ' items' : ' item'}
          {' '}
          ${this.props.cart.totalPrice}

        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="secondary"
            onClick={() => this.props.cartVisibleToggle()}
          >Continue chopping
          </Button>
          {' '}
          <NavLink
            to="/checkout"
          />
          <Button onClick={() => this.gotoCheckout()} color="primary">Checkout</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


const mapStateToProps = state => ({
  cartVisible: state.cart.cartVisible,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartVisibleToggle: () => dispatch(cartVisibleToggle()),
  cartProductRemove: productId => dispatch(cartProductRemove(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartModal));
