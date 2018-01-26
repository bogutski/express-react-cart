import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { productGetByCategoryId } from '../product/_actions/productActions';

class CatalogProductArea extends Component {
  componentWillReceiveProps(nextProps) {
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

      this.props.productGetByCategoryId(currentSubCategoryId);
    }
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
});

const mapDispatchToProps = dispatch => ({
  productGetByCategoryId: categoryId => dispatch(productGetByCategoryId(categoryId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatalogProductArea));
