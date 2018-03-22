import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { productGetById } from './../_actions/productActions';
import ProductViewPrice from './productViewPrice';
import ProductViewImage from './productViewImage';
import ProductViewCartButton from './productViewCartButton';
import ProductSimilar from './../list/productSimilar';

class ProductViewMain extends Component {
  render() {
    return (
      <Row className="product-view">

        <Col lg={6}>
          <ProductViewImage image={this.props.productInfo.image} />
        </Col>

        <Col lg={6}>
          <ProductViewPrice price={this.props.productInfo.price} />

          <ProductViewCartButton product={this.props.productInfo} />
        </Col>

        <Col lg={12}>
          <ProductSimilar limit={6} catalogId={this.props.productInfo.catalog} />
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
