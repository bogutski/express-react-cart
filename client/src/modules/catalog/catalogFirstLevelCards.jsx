import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class CatalogFirstLevelCards extends Component {
  render() {
    return (
      <Row>
        {
          this.props.catalog.map(el => (
            <Col key={el.id} md={3}>
              <NavLink
                to={`/catalog/${el.path}`}
                activeClassName="active"
              >
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody className="text-center">
                    <CardTitle>{el.name}</CardTitle>
                  </CardBody>
                </Card>
              </NavLink>
            </Col>
          ))
        }
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogFirstLevelCards));
