import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Col, Row } from 'reactstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Img from '../../utils/img/img';
import ProductViewCartButton from '../view/productViewCartButton';

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
          this.props.productList.slice(0, 16)
            .map(el =>
              (
                <Col
                  key={el._id}
                  xs={12}
                  md={4}
                  lg={3}
                  xl={2}
                  className="d-flex align-items-stretch product-card"
                >
                  <div
                    className="my-3 p-3 bg-white
                     rounded d-flex align-items-start flex-column box-shadow w-100"
                  >
                    <Row>
                      <Col className="image">
                        <NavLink to={`/product/${el._id}`}>
                          <Img pid={el.image[0].pid} crop="lpad" h={300} w={400} />
                        </NavLink>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <NavLink to={`/product/${el._id}`}>
                          {el.name}
                        </NavLink>
                      </Col>
                    </Row>

                    <hr />

                    <Row className="mt-auto">
                      <div className="d-flex">
                        <Col md={6} className="d-flex align-items-center price">${el.price}</Col>
                        <Col md={6}>
                          <ProductViewCartButton product={el} />
                        </Col>
                      </div>
                    </Row>
                  </div>
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
