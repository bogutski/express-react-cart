import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Collapse } from 'reactstrap';
import ReactTable from 'react-table';
import _ from 'lodash';
import Img from './../utils/img/img';

class SearchResults extends Component {
  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        // Check product without images
        accessor: el => (!_.isEmpty(el.image) ?
          <Link to={`/product/${el._id}`}>
            <Img pid={el.image[0].pid} h={50} />
          </Link> : ''),
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
          data={this.props.searchProductList}
          columns={this.columns()}
          minRows={0}
          defaultPageSize={30}
          showPagination={this.props.searchProductList.length > 20}
        />
      </div>
    );
  }

  render() {
    return (
      <Collapse isOpen={!_.isEmpty(this.props.searchProductList)}>
        <div className="col pb-1">
          <div className="alert alert-light">
            <h3>Search results</h3>
            {this.table()}
          </div>
        </div>
      </Collapse>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  searchProductList: state.search.searchProductList,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
