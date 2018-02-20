import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Img from '../../utils/img/img';

class ProductFormImages extends Component {
  constructor(props) {
    super(props);
  }

  formSubmit(e) {
    e.preventDefault();

    const data = {
      ...this.props.productForm.values,
    };
  }

  render() {
    return (
      <ul>
        {_.get(this.props, 'productForm.values.image', [])
          .map(el => (
            <li key={el.pid}>
              <Img pid={el.pid} h={50} />
              <span>Delete</span>
            </li>))
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  productForm: state.form.product,
});

const mapDispatchToProps = dispatch => ({
  // productGetById: productId => dispatch(productGetById(productId)),
  // productCreate: product => dispatch(productCreate(product)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(ProductFormImages);
