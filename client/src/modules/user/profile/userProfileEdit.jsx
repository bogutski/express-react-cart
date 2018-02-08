import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { userLogin } from './_actions/userActions';

class UserProfileEdit extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Edit profile</title>
        </Helmet>

        Edit form

      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // userLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEdit);
