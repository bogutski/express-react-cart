import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CatalogCard from './catalogCard';

class CatalogFirstLevelCards extends Component {
  render() {
    return (
      <Row>
        {
          this.props.catalog.map(el =>
            (<CatalogCard
              link={`/catalog/${el.path}`}
              catalog={el}
            />))
        }
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogFirstLevelCards));
