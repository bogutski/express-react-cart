import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import { productGetById } from './../_actions/productActions';
import Tabs from './../../utils/tabs/tabs';
import ProductViewDetails from './productViewDetails';

class ProductView extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;

    if (productId) {
      this.props.productGetById(productId);
    }
  }

  component() {
    return (
      <div>
        <h1>{this.props.productInfo.name}</h1>
        <Tabs
          tabs={[
            {
              name: 'view',
              label: 'View',
              content: <ProductViewDetails />,
              default: true,
            },
            {
              name: 'edit',
              label: 'Edit',
              content: <Redirect to={`/product/edit/${this.props.productInfo._id}`} />,
            },
          ]}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          !_.isEmpty(this.props.productInfo)
            ? this.component()
            : <span>Loading ...</span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productInfo: state.product.productInfo,
});

const mapDispatchToProps = dispatch => ({
  productGetById: productId => dispatch(productGetById(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
