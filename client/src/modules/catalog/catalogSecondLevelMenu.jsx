import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class CatalogSecondLevelMenu extends Component {
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
      <Nav vertical>
        {this.getSubcategories().map(el => (
          <NavItem key={el.id}>
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
