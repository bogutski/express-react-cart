import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShippingList extends Component {
  edit(e) {
    console.log(e);
  }

  render() {
    return (
      <ul>
        {this.props.shippingList.map(el =>
          (
            <li key={el.zip}>
              {el.address} {el.zip}
              <span
                className="btn btn-link text-danger"
                onClick={() => this.edit(el.zip)}
              >Edit
              </span>
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  shippingList: state.shipping.shippingList,
});

const mapDispatchToProps = dispatch => ({
  // updateShipping: (userId, data) => dispatch(updateShipping(userId, data)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingList);
