const tempVocTree = [
  { name: 'Cords' },
  {
    name: 'Boxes',
    price: 1230,
    children: [
      {
        name: 'Plastic boxes',
      },
      { name: 'Wood boxes' }],
  },
  {
    name: 'Cables',
    children: [{ name: 'Egg' }],
  },
];

const initialState = {
  vocabularList: [], // Vocabularies list
  vocabularInfo: {}, // Current vocabular info
  vocabularTree: tempVocTree, // Current vocabular tree of terms
};

const vocabular = (state = initialState, action) => {
  switch (action.type) {
    case 'VOCABULAR_LIST':
      return {
        ...state,
        vocabularList: action.payload,
      };

    case 'VOCABULAR_INFO':
      return {
        ...state,
        vocabularInfo: action.payload,
      };

    case 'VOCABULAR_TREE':
      return {
        ...state,
        vocabularTree: action.payload,
      };

    default:
      return state;
  }
};

export default vocabular;
