import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ProductCard from '../displays/productCard';

class ProductSimilar extends Component {
  grid() {
    return (
      <Row className="bc-c3 wr-tb-1">
        <Col md={12}>
          <h3 className="nom">Similar</h3>
        </Col>
        {
          this.props.productList
            .filter(el => el.catalog === this.props.catalogId)
            .slice(0, this.props.limit)
            .map(el => <ProductCard product={el} />)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSimilar));
