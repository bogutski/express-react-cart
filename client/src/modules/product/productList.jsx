import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { withRouter, Link } from 'react-router-dom';
import { getAllProducts } from './_actions/productActions';

class ProductList extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.userList)) {
      this.props.getAllProducts();
    }
  }

  columns() {
    return [
      {
        Header: 'Id',
        accessor: '_id', // String-based value accessors!
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => <Link to={`/product/edit/${el._id}`}>Edit</Link>,
      },
    ];
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.props.productList}
          columns={this.columns()}
          minRows={0}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));
