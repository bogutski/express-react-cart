import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import CatalogCard from './catalogCard';

// Clone from catalogSecondLevelMenu.jsx
class CatalogSecondLevelCards extends Component {
  getSubcategories() {
    if (_.has(this.props.match, 'params.level')) {
      const currentCategory = this.props.catalog
        .find(el => el.path === this.props.match.params.level);

      if (_.has(currentCategory, 'children')) {
        return currentCategory.children;
      }
    }
    return [];
  }

  cards() {
    return (
      <Row>
        {this.getSubcategories()
          .map(el => (
            <CatalogCard
              key={el.id}
              link={`/catalog/${this.props.match.params.level}/${el.path}`}
              catalog={el}
            />
          ))}
      </Row>
    );
  }


  render() {
    // Show only on first level
    return _.has(this.props, 'match.params.sublevel') ? null : this.cards();
  }
}

const mapStateToProps = state => ({
  router: state.router.location,
  catalog: state.vocabular.catalog,
});

export default withRouter(connect(mapStateToProps)(CatalogSecondLevelCards));
