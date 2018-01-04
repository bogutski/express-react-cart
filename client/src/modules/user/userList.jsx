import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { getAllUsers } from './_actions/userActions';

class UserList extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.userList)) {
      this.props.getAllUsers();
    }
  }

  columns() {
    return [{
      Header: 'Id',
      accessor: '_id', // String-based value accessors!
    }, {
      Header: 'Email',
      accessor: 'email',
    }];
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.props.userList}
          columns={this.columns()}
          minRows={0}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.user.userList,
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
