import React, { Component } from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,
  UncontrolledDropdown,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { userLogout } from './_actions/userActions';

class UserSection extends Component {
  userShortInfo() {
    return (
      <Collapse isOpen={this.props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav>

            <DropdownToggle nav caret>
              {this.props.userInfo.email}
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem onClick={() => this.props.userLogout()}>
                Logout
              </DropdownItem>

              <Link to="/user/list" className="dropdown-item">User list</Link>

            </DropdownMenu>

          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    );
  }

  unauthMenu() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/user/register" className="nav-link">Register</Link>
        </NavItem>

        <NavItem>
          <Link to="/user/login" className="nav-link">Login</Link>
        </NavItem>
      </Nav>
    );
  }

  render() {
    return _.isEmpty(this.props.userInfo)
      ? this.unauthMenu()
      : this.userShortInfo();
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);
