import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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

  render() {
    return (
      <Nav vertical>
        {this.getSubcategories().map(el => (
          <NavItem key={el.id}>
            <Link
              to={{
                pathname: el.path,
                state: {
                  component: 'catalog',
                  categoryId: this.props.router.state.categoryId,
                },
              }}
              className="nav-link"
            >{el.name}
            </Link>
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

export default connect(mapStateToProps)(CatalogSecondLevelMenu);
