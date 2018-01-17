import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import { Button, ButtonGroup } from 'reactstrap';
import {
  vocabularTermDelete,
  vocabularSetTreeData,
  vocabularTermToEditForm,
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
            subtitle() { return <div>{node.path}</div>; },
            buttons: [
              <ButtonGroup size="sm">
                <Button
                  color="primary"
                  outline
                  onClick={() => this.props.vocabularTermToEditForm(node, path)}
                >Edit
                </Button>
                <Button
                  color="danger"
                  outline
                  onClick={() => this.props.vocabularTermDelete(path)}
                >Remove
                </Button>
              </ButtonGroup>,
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
  vocabularTermDelete: path => dispatch(vocabularTermDelete(path)),
  vocabularTermToEditForm: (node, path) => dispatch(vocabularTermToEditForm(node, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularTree);
