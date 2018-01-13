import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { productGetAll, productDeleteById } from './_actions/productActions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    if (_.isEmpty(this.props.userList)) {
      this.props.productGetAll();
    }
  }

  delete(id) {
    this.props.productDeleteById(id);
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
        accessor: el => (
          <div>
            <Link to={`/product/edit/${el._id}`}>Edit</Link>
            <Button color="link" onClick={() => this.delete(el._id)} >Delete</Button>
          </div>
        ),
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
          defaultPageSize={30}
          showPagination={this.props.productList.length > 30}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  productGetAll: () => dispatch(productGetAll()),
  productDeleteById: productId => dispatch(productDeleteById(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));
