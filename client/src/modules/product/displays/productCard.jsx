import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Img from '../../utils/img/img';
import ProductViewCartButton from '../view/productViewCartButton';

class ProductCard extends Component {
  render() {
    const product = this.props.product;
    return (
      <Col
        key={product._id}
        xs={12}
        md={4}
        lg={3}
        xl={2}
        className="d-flex align-items-stretch product-card"
      >
        <div className="my-3 p-3 bg-white
                        rounded d-flex align-items-start flex-column plate w-100"
        >
          <Row>
            <Col className="image">
              <NavLink to={`/product/${product._id}`}>
                <Img pid={product.image[0].pid} crop="lpad" h={300} w={400} />
              </NavLink>
            </Col>
          </Row>

          <Row>
            <Col>
              <NavLink to={`/product/${product._id}`}>
                {product.name}
              </NavLink>
            </Col>
          </Row>

          <Row className="mt-auto">
            <div className="d-flex mt-4">
              <Col md={4} className="d-flex align-items-center price">${product.price}</Col>
              <Col md={8} className="text-right">
                <ProductViewCartButton size="sm" product={product} />
              </Col>
            </div>
          </Row>
        </div>
      </Col>

    );
  }
}


export default ProductCard;
