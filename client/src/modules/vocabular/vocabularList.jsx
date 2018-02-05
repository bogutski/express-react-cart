import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button } from 'reactstrap';
import ReactTable from 'react-table';
import { withRouter, Link } from 'react-router-dom';
import { vocabularGetAll, vocabularDeleteById } from './_actions/vocabularActions';

class VocabularList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    if (_.isEmpty(this.props.vocabularList)) {
      this.props.vocabularGetAll();
    }
  }

  delete(vocabularId) {
    this.props.vocabularDeleteById(vocabularId);
  }

  columns() {
    return [
      {
        Header: 'Id',
        accessor: '_id', // String-based value accessors!
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => (
          <div>
            <Link to={`/vocabular/edit/${el._id}`}>Edit</Link>
            <Button color="link" onClick={() => this.delete(el._id)} >Delete</Button>
          </div>
        ),
      },
    ];
  }

  render() {
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.vocabularList}
          columns={this.columns()}
          minRows={0}
          defaultPageSize={30}
          showPagination={this.props.vocabularList.length > 30}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vocabularList: state.vocabular.vocabularList,
});

const mapDispatchToProps = dispatch => ({
  vocabularGetAll: () => dispatch(vocabularGetAll()),
  vocabularDeleteById: vocabularId => dispatch(vocabularDeleteById(vocabularId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VocabularList));
