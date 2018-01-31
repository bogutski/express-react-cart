import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { cartVisibleToggle } from './_actions/cartActions';

class CartModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.cartVisible}
        toggle={this.props.cartVisibleToggle}
      >
        <ModalHeader toggle={this.props.cartVisibleToggle}>Cart title</ModalHeader>
        <ModalBody>
          Cart table
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={this.props.cartVisibleToggle}
          >Continue chopping
          </Button>
          <Button color="primary" >Checkout</Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}


const mapStateToProps = state => ({
  cartVisible: state.cart.cartVisible,
});

const mapDispatchToProps = dispatch => ({
  cartVisibleToggle: () => dispatch(cartVisibleToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
