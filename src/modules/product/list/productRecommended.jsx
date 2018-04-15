import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ProductCard from '../displays/productCard';

class ProductRecommended extends Component {
  grid() {
    return (
      <Row className="bc-c3 wr-tb-1">
        <Col md={12}>
          <h1>Hottest deals</h1>
        </Col>
        {
          this.props.productList.slice(0, 16)
            .map(el => <ProductCard key={el._id} product={el} />)
        }
      </Row>
    );
  }

  render() {
    return _.isEmpty(this.props.productList) ? <span>No products</span> : this.grid();
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  // productDeleteById: productId => dispatch(productDeleteById(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductRecommended));
