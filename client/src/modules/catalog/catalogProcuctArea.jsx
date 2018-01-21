import React, { Component } from 'react';
import { Row, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import Pre from './../pre/pre';

class CatalogProductArea extends Component {
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

  render() {
    return (
      <Row>

        <Nav>
          {this.getSubcategories().map(el => (
            <NavItem key={el.id}>
              <Link
                to={{
                  pathname: `${this.props.router.pathname}/${el.path}`,
                  state: {
                    categoryId: el.id,
                  },
                }}
                className="nav-link"
              >{el.name}
              </Link>
            </NavItem>
          ))}
        </Nav>

        <Pre obj={this.getSubcategories()} on- />

        <Pre obj={this.props.router} on />

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogProductArea);
