import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CatalogFirstLevelMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>

        {
          this.props.catalog.map(el => (
            <NavItem key={el.id}>
              <Link
                to={{
                  pathname: `catalog/${el.path}`,
                  state: { referrer: 123 },
                }
                }
                className="nav-link"
              >{el.name}
              </Link>
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

export default connect(mapStateToProps)(CatalogFirstLevelMenu);
