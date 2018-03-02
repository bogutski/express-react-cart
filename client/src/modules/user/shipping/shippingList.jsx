import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shippingListItemToEditForm } from './../_actions/profileActions';

class ShippingList extends Component {
  edit(el) {
    console.log(el);
    this.props.shippingListItemToEditForm(el);
  }

  delete(e) {
    console.log(e);
  }

  render() {
    return (
      <ul>
        {this.props.shippingList.map(el =>
          (
            <li key={el.id}>
              {el.data.address} {el.data.zip}
              <span
                className="btn btn-link"
                onClick={() => this.edit(el)}
              >Edit
              </span>

              <span
                className="btn btn-link text-danger"
                onClick={() => this.delete(el.data.zip)}
              >Delete
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
  shippingListItemToEditForm: data => dispatch(shippingListItemToEditForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingList);
