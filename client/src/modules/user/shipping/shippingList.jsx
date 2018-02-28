import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShippingList extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const data = {
      ...this.props.shippingForm.values,
    };
    const userId = this.props.userInfo._id;

    this.props.updateShipping(userId, data);
  }

  render() {
    return (
      <div>
        -
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shippingForm: state.form.shipping,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // updateShipping: (userId, data) => dispatch(updateShipping(userId, data)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingList);
