import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { productGetByCategoryId } from '../product/_actions/productActions';

class CatalogProductArea extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('WRP');
    // Get current subcategory id for load products
    if (
      !_.isEmpty(nextProps.catalog) &&
      this.props.match.params.level &&
      this.props.match.params.sublevel
    ) {
      const currentSubCategoryId = nextProps.catalog
        .find(el => el.path === this.props.match.params.level)
        .children
        .find(el => el.path === this.props.match.params.sublevel)
        .id;
      console.log(currentSubCategoryId);
      console.log(nextProps.categoryProductList[currentSubCategoryId]);

      if (_.isEmpty(nextProps.categoryProductList[currentSubCategoryId])) {
        this.props.productGetByCategoryId(currentSubCategoryId);
      }
    }
  }

  componentDidMount() {
    console.log('CDM');
  }


  render() {
    return (
      <Row>
        Products

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
  categoryProductList: state.product.categoryProductList,
});

const mapDispatchToProps = dispatch => ({
  productGetByCategoryId: categoryId => dispatch(productGetByCategoryId(categoryId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatalogProductArea));
