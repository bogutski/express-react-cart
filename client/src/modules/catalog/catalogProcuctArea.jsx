import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import _ from 'lodash';
import { productFilterByCategoryId } from '../product/_actions/productActions';
import { cartProductAdd } from '../cart/_actions/cartActions';
import Img from '../utils/img/img';

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

  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        accessor: el => (!_.isEmpty(el.image) ?
          <Link to={`/product/${el._id}`}>
            <Img pid={el.image[0].pid} w={150} />
          </Link> : ''),
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: el => (
          <Link to={`/product/${el._id}`}>{el.name}</Link>),
      },
      {
        Header: 'Catalog',
        accessor: 'catalog',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => (
          <div>
            <Link to={`/product/${el._id}`}>View</Link>{' '}
            <Link className="btn btn-link btn-sm" to={`/product/edit/${el._id}`}>Edit</Link>
            <Button
              onClick={() => this.props.cartProductAdd(el, 1)}
              color="primary"
              size="sm"
            >Add to cart
            </Button>
          </div>
        ),
      },
    ];
  }

  render() {
    return (
      <ReactTable
        className="light border"
        data={this.props.currentCategory}
        columns={this.columns()}
        minRows={0}
        defaultPageSize={30}
        showPagination={this.props.currentCategory.length > 30}
      />
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
  cartProductAdd: (productId, qt) => dispatch(cartProductAdd(productId, qt)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatalogProductArea));
