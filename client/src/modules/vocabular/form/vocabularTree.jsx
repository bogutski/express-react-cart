import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import {
  vocabularDeleteTerm,
  vocabularTermToEditForm,
  vocabularSetTreeData,
} from '../_actions/vocabularActions';

class VocabularTree extends Component {
  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.props.vocabularTree}
          onChange={treeData => this.props.vocabularSetTreeData(treeData)}
          generateNodeProps={({ node, path }) => ({
            title: node.name,
            buttons: [
              <button
                onClick={() => this.props.vocabularTermToEditForm(node, path)}
              >Edit
              </button>,
              <button
                onClick={() => this.props.vocabularDeleteTerm(path)}
              >Remove
              </button>,
            ],
          })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vocabularTree: state.vocabular.vocabularTree,
});

const mapDispatchToProps = dispatch => ({
  vocabularSetTreeData: treeData => dispatch(vocabularSetTreeData(treeData)),
  vocabularDeleteTerm: path => dispatch(vocabularDeleteTerm(path)),
  vocabularTermToEditForm: (node, path) => dispatch(vocabularTermToEditForm(node, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularTree);
