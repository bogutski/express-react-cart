import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import { vocabularAddTermToChild } from '../_actions/vocabularActions';

class VocabularTree extends Component {
  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.props.vocabularTree}
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={({ node, path }) => ({
            title: node.name,
            buttons: [
              <button> Add Child </button>,
              <button> Remove </button>,
            ],
          })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vocabularTree: state.vocabular.vocabularTree,
});

const mapDispatchToProps = dispatch => ({
  vocabularAddTermToChild: childPath => dispatch(vocabularAddTermToChild(childPath)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularTree);
