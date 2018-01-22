import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

// Clone from catalogSecondLevelMenu.jsx
class CatalogSecondLevelCards extends Component {
  getSubcategories() {
    if (_.has(this.props.router, 'state.categoryId')) {
      const currentCategory = this.props.catalog
        .find(el => el.id === this.props.router.state.categoryId);

      if (_.has(currentCategory, 'children')) {
        return currentCategory.children;
      }
    }
    return [];
  }

  pathForSecondLevel(firstLevelPath, secondLevelPath, currentLevel) {
    if (currentLevel === 1) {
      return `${firstLevelPath}/${secondLevelPath}`;
    }
    const pathWithoutLastPart = firstLevelPath.substr(0, firstLevelPath.lastIndexOf('/'));
    return `${pathWithoutLastPart}/${secondLevelPath}`;
  }

  render() {
    return (
      <Row>
        {this.getSubcategories()
          .map(el => (
            <Col md={3}>
              <NavLink
                to={{
                  pathname: this.pathForSecondLevel(
                    this.props.router.pathname,
                    el.path,
                    this.props.router.state.level,
                  ),
                  state: {
                    component: 'catalog',
                    level: 2,
                    categoryId: this.props.router.state.categoryId,
                  },
                }}
                activeClassName="active"
              >

                <Card key={el.id}>
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
          ))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogSecondLevelCards));
