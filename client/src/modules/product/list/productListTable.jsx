import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { productDeleteById } from '../_actions/productActions';
import Img from '../../utils/img/img';

class ProductListTable extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    this.props.productDeleteById(id);
  }

  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        width: 200,
        accessor: el => (!_.isEmpty(el.image) ?
          <NavLink to={`/product/${el._id}`}>
            <Img pid={el.image[0].pid} w={150} />
          </NavLink> : ''),
        // Check product without images
      },
      {
        Header: 'Id',
        accessor: '_id', // String-based value accessors!
      },
      {
        Header: 'Name',
        accessor: 'name',
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
            <Link className="btn btn-link btn-sm" to={`/product/${el._id}`}>View</Link>{' '}
            <Link className="btn btn-link btn-sm" to={`/product/edit/${el._id}`}>Edit</Link>
            <Button
              color="link"
              size="sm"
              className="text-danger"
              onClick={() => this.delete(el._id)}
            >Delete
            </Button>
          </div>
        ),
      },
    ];
  }

  table() {
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.productList}
          columns={this.columns()}
          minRows={0}
          defaultPageSize={30}
          showPagination={this.props.productList.length > 30}
        />
      </div>
    );
  }

  render() {
    return _.isEmpty(this.props.productList) ? <span>No products</span> : this.table();
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  productDeleteById: productId => dispatch(productDeleteById(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListTable));
