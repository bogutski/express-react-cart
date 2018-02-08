import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Tabs from './../../utils/tabs/tabs';
import UserProfileEdit from './userProfileEdit';
import UserProfileView from './userProfileView';
// import { userLogin } from './_actions/userActions';


class UserProfile extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Profile</title>
        </Helmet>

        <h1>Profile</h1>

        <Tabs
          tabs={[
            {
              name: 'view',
              label: 'View',
              content: <UserProfileView />,
              default: true,
            },
            {
              name: 'edit',
              label: 'Edit',
              content: <UserProfileEdit />,
            },
          ]}
        />

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
