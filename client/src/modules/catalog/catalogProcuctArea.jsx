import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productFilterByCategoryId } from '../product/_actions/productActions';

class CatalogProductArea extends Component {
  componentDidMount() {
    const level = this.props.match.params.level;
    const sublevel = this.props.match.params.sublevel;
    this.filterProducts(level, sublevel);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      const level = nextProps.match.params.level;
      const sublevel = nextProps.match.params.sublevel;
      this.filterProducts(level, sublevel);
    }
  }

  // Get current subcategory id for load products
  filterProducts(level, sublevel) {
    const currentSubCategoryId = this.props.catalog
      .find(el => el.path === level)
      .children
      .find(el => el.path === sublevel)
      .id;
    this.props.productFilterByCategoryId(currentSubCategoryId);
  }

  render() {
    return (
      <Row>
        Products

        <ul>
          {this.props.currentCategory
            .map(el => <li key={el._id}>{el.name} - {el.price}</li>)}
        </ul>

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
  currentCategory: state.product.currentCategory,
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  productFilterByCategoryId: categoryId => dispatch(productFilterByCategoryId(categoryId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatalogProductArea));
