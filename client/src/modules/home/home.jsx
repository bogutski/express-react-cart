import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // getUserById: userId => dispatch(getUserById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
