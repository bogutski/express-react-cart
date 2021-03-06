import React, { Component } from 'react';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Img from './../utils/img/img';

class CatalogCard extends Component {
  render() {
    const el = this.props.catalog;
    return (
      <Col
        key={el._id}
        xs={12}
        md={4}
        lg={3}
        xl={2}
        className="d-flex align-items-stretch el-card"
      >
        <div className="my-3 p-3 bg-white text-center d-flex flex-column rounded box-shadow w-100">
          <Row>
            <Col className="image">
              <NavLink to={this.props.link}>
                {_.has(el, 'files[0].pid') &&
                <Img pid={el.files[0].pid} crop="lpad" h={300} w={400} />
                }
              </NavLink>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <NavLink to={this.props.link}>
                {el.name}
              </NavLink>
            </Col>
          </Row>

        </div>
      </Col>

    );
  }
}

export default CatalogCard;
