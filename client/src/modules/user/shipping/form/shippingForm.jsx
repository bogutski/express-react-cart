import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import shortid from 'shortid';
import { TextField } from '../../../utils/form/form';
import { number, required } from '../../../utils/form/validators';
import Pre from '../../../utils/pre/pre';
import {
  shippingListItemAdd,
  shippingListUpdated,
  updateShipping,
} from '../../_actions/shippingActions';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShippingListUpdated) {
      this.props.updateShipping(this.props.userInfo._id, nextProps.shippingList);
      this.props.shippingListUpdated(false);
    }
  }

  formSubmit(e) {
    e.preventDefault();

    const data = { ...this.props.shippingForm.values };

    this.props.shippingListItemAdd(
      this.props.userInfo._id,
      {
        id: shortid.generate(),
        data,
      },
    );
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Field
          name="address"
          type="text"
          placeholder="Shipping address"
          component={TextField}
          validate={[required]}
        />

        <Field
          name="zip"
          type="text"
          placeholder="ZIP"
          component={TextField}
          validate={[required, number]}
        />

        <Button
          type="submit"
          color="primary"
          disabled={this.props.shippingForm && {}.hasOwnProperty.call(this.props.shippingForm, 'syncErrors')}
        >Save
        </Button>

        <Pre obj={_.get(this.props, 'shippingForm.values', {})} />

      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isShippingListUpdated: state.shipping.isShippingListUpdated,
  shippingList: state.shipping.shippingList,
  shippingForm: state.form.shipping,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  shippingListUpdated: bool => dispatch(shippingListUpdated(bool)),
  updateShipping: (userId, data) => dispatch(updateShipping(userId, data)),
  shippingListItemAdd: (userId, form) => dispatch(shippingListItemAdd(userId, form)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'shipping' }),
)(ShippingForm);
