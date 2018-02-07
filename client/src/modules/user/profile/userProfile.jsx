import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { userLogin } from './_actions/userActions';

class UserProfile extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Profile</title>
        </Helmet>

        <h1>Profile</h1>



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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
