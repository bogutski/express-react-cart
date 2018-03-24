import React, { Component } from 'react';
import { Row } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CatalogCard from './catalogCard';

class CatalogFirstLevelCards extends Component {
  component() {
    return (
      <Row>
        {
          this.props.catalog.map(el =>
            (<CatalogCard
              key={el.id}
              link={`/catalog/${el.path}`}
              catalog={el}
            />))
        }
      </Row>
    );
  }

  render() {
    // Show only on catalog page
    return _.get(this.props, 'match.params.level') ? null : this.component();
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogFirstLevelCards));
