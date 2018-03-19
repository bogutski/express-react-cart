import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ProductCard from '../displays/productCard';

class ProductRecommended extends Component {
  grid() {
    return (
      <Row>

        {
          this.props.productList.slice(0, 16)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductRecommended));
