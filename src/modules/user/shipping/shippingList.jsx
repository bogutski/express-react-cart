import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { shippingListItemToEditForm } from '../_actions/shippingActions';

class ShippingList extends Component {
  edit(el) {
    console.log(el);
    this.props.shippingListItemToEditForm(el);
  }

  delete(e) {
    console.log(e);
  }

  list() {
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

  render() {
    console.log(_.isEmpty(this.props.shippingList));
    return (
      <div>
        {_.isEmpty(this.props.shippingList) ? 'No shipping' : this.list()}
      </div>);
  }
}

const mapStateToProps = state => ({
  shippingList: state.shipping.shippingList,
});

const mapDispatchToProps = dispatch => ({
  shippingListItemToEditForm: data => dispatch(shippingListItemToEditForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingList);
