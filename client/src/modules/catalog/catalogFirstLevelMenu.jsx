import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class CatalogFirstLevelMenu extends Component {
  render() {
    return (
      <Nav>
        {
          this.props.catalog.map(el => (
            <NavItem key={el.id}>
              <NavLink
                to={{
                  pathname: `/catalog/${el.path}`,
                  state: {
                    component: 'catalog',
                    level: 1,
                    categoryId: el.id,
                  },
                }}
                activeClassName="active"
                className="nav-link"
              >{el.name}
              </NavLink>
            </NavItem>
          ))
        }
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogFirstLevelMenu));
