import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class SearchField extends Component {
  render() {
    return (
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField));
