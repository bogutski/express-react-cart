import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import OfferListTable from './offerListTable';
// import OfferControls from '../offerControls';

class OfferList extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <title>Offers</title>
        </Helmet>

        <h1>Offers</h1>
        {/*<OfferControls />*/}
        {/*<OfferListTable />*/}
      </div>
    );
  }
}

export default OfferList;
