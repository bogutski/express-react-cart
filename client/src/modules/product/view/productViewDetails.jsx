import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { productGetById } from './../_actions/productActions';
import ProductViewPrice from './productViewPrice';
import ProductViewImage from './productViewImage';
import ProductViewCartButton from './productViewCartButton';

class ProductViewMain extends Component {
  render() {
    return (
      <Row>

        <Col lg={6}>
          <ProductViewImage image={this.props.productInfo.image} />
        </Col>

        <Col lg={6}>
          <ProductViewPrice price={this.props.productInfo.price} />

          <ProductViewCartButton product={this.props.productInfo} />
        </Col>

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  productInfo: state.product.productInfo,
});

const mapDispatchToProps = dispatch => ({
  productGetById: productId => dispatch(productGetById(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewMain);
