import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';

import { Button } from 'reactstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Img from './../utils/img/img';

class ProductRecommended extends Component {
  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        // Check product without images
        accessor: el => (!_.isEmpty(el.image) ?
          <NavLink to={`/product/${el._id}`}>
            <Img pid={el.image[0].pid} w={150} />
          </NavLink> : ''),
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

  grid() {
    return (
      <Row>

        {
          this.props.productList.map(el =>
            (
              <Col key={el.id} md={3}>
                <NavLink to={`/product/${el._id}`}>
                  <Img pid={el.image[0].pid} w={150} />
                </NavLink>
                {el.name}
              </Col>
            ))
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
