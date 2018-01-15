import { changeNodeAtPath, removeNodeAtPath, getFlatDataFromTree } from 'react-sortable-tree';

const initialState = {
  vocabularList: [], // Vocabularies list
  vocabularInfo: {}, // Current vocabular info
  vocabularTree: [], // Current vocabular tree of terms
  editedTerm: {}, // Currently edited term, name, params, path
  categoryList: [], // List of terms from voc: Category
};

const vocabular = (state = initialState, action) => {
  switch (action.type) {
    case 'VOCABULAR_LIST':
      return {
        ...state,
        vocabularList: action.payload,
      };

    case 'VOCABULAR_TERM_TREE':
      return {
        ...state,
        vocabularTree: action.payload,
      };

    case 'VOCABULAR_TERM_ADD_TO_ROOT':
      return {
        ...state,
        vocabularTree: state.vocabularTree.concat(action.payload),
      };

    case 'VOCABULAR_TERM_CANCEL_EDIT':
      return {
        ...state,
        editedTerm: initialState.editedTerm,
      };

    case 'VOCABULAR_TERM_DELETE': {
      const vocabularTree = removeNodeAtPath({
        treeData: state.vocabularTree,
        path: action.payload,
        getNodeKey: ({ treeIndex }) => treeIndex,
      });

      return {
        ...state,
        vocabularTree,
      };
    }

    case 'VOCABULAR_TERM_TO_EDIT_FORM': {
      return {
        ...state,
        editedTerm: action.payload,
      };
    }

    case 'VOCABULAR_TERM_UPDATE': {
      const node = action.payload.node.node;
      const term = action.payload.term;

      const vocabularTree = changeNodeAtPath({
        treeData: state.vocabularTree,
        path: action.payload.path,
        getNodeKey: ({ treeIndex }) => treeIndex,
        newNode: { ...node, ...term },
      });

      return {
        ...state,
        vocabularTree,
      };
    }

    case 'VOCABULAR_FILL_CATEGORY_LIST': {
      const flatData = getFlatDataFromTree({
        treeData: action.payload,
        // This ensures your "id" properties are exported in the path
        getNodeKey: ({ node }) => node.name,
        // Makes sure you traverse every node in the tree, not just the visible ones
        ignoreCollapsed: false,
      }).map(({ node, path }) => ({
        id: node.id,
        label: node.name,
        value: node.id,

        // The last entry in the path is this node's key
        // The second to last entry (accessed here) is the parent node's key
        parent: path.length > 1 ? path[path.length - 2] : null,
      }));

      console.log(flatData);
      return {
        ...state,
        categoryList: flatData,
      };
    }

    default:
      return state;
  }
};

export default vocabular;
