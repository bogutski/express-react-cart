import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import {
  vocabularDeleteTerm,
  vocabularGetTermToEditForm,
  vocabularSetTreeData,
} from '../_actions/vocabularActions';

class VocabularTree extends Component {
  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.props.vocabularTree}
          onChange={treeData => this.props.vocabularSetTreeData(treeData)}
          generateNodeProps={({ node, path }) => {
            console.log(node, path);
            return {
              title: node.name,
              buttons: [
                <button onClick={() => this.props.vocabularGetTermToEditForm(node, path)}>Edit</button>,
                <button onClick={() => this.props.vocabularDeleteTerm(path)}>Remove</button>,
              ],
            };
          }
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
  vocabularGetTermToEditForm: (node, path) => dispatch(vocabularGetTermToEditForm(node, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularTree);
