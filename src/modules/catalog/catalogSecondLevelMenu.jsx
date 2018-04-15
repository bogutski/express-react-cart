import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class CatalogSecondLevelMenu extends Component {
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

  render() {
    return (
      <Nav vertical id="catalog-second-level">
        {this.getSubcategories().map(el => (
          <NavItem key={el.id}>
            <NavLink
              to={`/catalog/${this.props.match.params.level}/${el.path}`}
              activeClassName="active"
              className="nav-link"
            >{el.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogSecondLevelMenu));
