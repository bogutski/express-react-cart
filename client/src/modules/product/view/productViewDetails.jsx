import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { productGetById } from './../_actions/productActions';
import ProductViewPrice from './productViewPrice';
import ProductViewImage from './productViewImage';

class ProductViewMain extends Component {
  render() {
    console.log(this.props.productInfo);
    return (
      <Row>

        <Col>
          <ProductViewImage image={this.props.productInfo.image} />
        </Col>

        <Col>
          <ProductViewPrice price={this.props.productInfo.price} />
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
