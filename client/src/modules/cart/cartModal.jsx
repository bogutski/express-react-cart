import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { NavLink } from 'react-router-dom';
import { cartProductRemove, cartVisibleToggle } from './_actions/cartActions';

class CartModal extends Component {
  columns() {
    return [
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
            className="light"
            resizable={false}
            data={this.props.cart.cart}
            columns={this.columns()}
            minRows={0}
            defaultPageSize={30}
            showPagination={this.props.cart.cart.length > 30}
          />

          {this.props.cart.totalCount} {this.props.cart.totalCount > 1 ? 'items' : 'item'}
          {' '}
          ${this.props.cart.totalPrice}

        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="secondary"
            onClick={this.props.cartVisibleToggle}
          >Continue chopping
          </Button>
          {' '}
          <NavLink
            to="/checkout"
          >
            <Button color="primary">Checkout</Button>
          </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
