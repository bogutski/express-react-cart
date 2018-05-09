import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { offerDeleteById } from '../_actions/offerActions';
import Img from '../../utils/img/img';

class OfferListTable extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    this.props.offerDeleteById(id);
  }

  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        width: 200,
        accessor: el => (!_.isEmpty(el.image) ?
          <NavLink to={`/offer/${el._id}`}>
            <Img pid={el.image[0].pid} w={150} />
          </NavLink> : ''),
        // Check offer without images
      },
      {
        Header: 'Id',
        accessor: '_id', // String-based value accessors!
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Catalog',
        accessor: 'catalog',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => (
          <div>
            <Link className="btn btn-link btn-sm" to={`/offer/${el._id}`}>View</Link>{' '}
            <Link className="btn btn-link btn-sm" to={`/offer/edit/${el._id}`}>Edit</Link>
            <Button
              color="link"
              size="sm"
              className="text-danger"
              onClick={() => this.delete(el._id)}
            >Delete
            </Button>
          </div>
        ),
      },
    ];
  }

  table() {
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.offerList}
          columns={this.columns()}
          minRows={0}
          defaultPageSize={30}
          showPagination={this.props.offerList.length > 30}
        />
      </div>
    );
  }

  render() {
    return _.isEmpty(this.props.offerList) ? <span>No offers</span> : this.table();
  }
}

const mapStateToProps = state => ({
  offerList: state.offer.offerList,
});

const mapDispatchToProps = dispatch => ({
  offerDeleteById: offerId => dispatch(offerDeleteById(offerId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferListTable));
