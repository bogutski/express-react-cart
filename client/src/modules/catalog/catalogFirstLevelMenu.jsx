import React, { Component } from 'react';
import { Row, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CatalogFirstLevelMenu extends Component {
  render() {
    return (
      <Row>
        <Nav>
          {
            this.props.catalog.map(el => (
              <NavItem key={el.id}>
                <Link
                  to={{
                    pathname: `/catalog/${el.path}`,
                    state: {
                      referrer: el.id,
                    },
                  }}
                  className="nav-link"
                >{el.name}
                </Link>
              </NavItem>
            ))
          }
        </Nav>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default connect(mapStateToProps)(CatalogFirstLevelMenu);
