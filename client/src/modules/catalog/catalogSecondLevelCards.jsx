import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

// Clone from catalogSecondLevelMenu.jsx
class CatalogSecondLevelCards extends Component {
  getSubcategories() {
    if (_.has(this.props.match, 'params.level')) {
      const currentCategory = this.props.catalog
        .find(el => el.path === this.props.match.params.level);

      if (_.has(currentCategory, 'children')) {
        return currentCategory.children;
      }
    }
    return [];
  }

  cards() {
    return (
      <Row>
        {this.getSubcategories()
          .map(el => (
            <Col key={el.id} md={3}>
              <NavLink
                to={`/catalog/${this.props.match.params.level}/${el.path}`}
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
          ))}
      </Row>
    );
  }


  render() {
    // Show only on first level
    return _.has(this.props, 'match.params.sublevel') ? null : this.cards();
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogSecondLevelCards));
