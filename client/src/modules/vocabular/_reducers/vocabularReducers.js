const initialState = {
  vocabularList: [], // Vocabular list
  vocabularInfo: {}, // Current vocabular info
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

    default:
      return state;
  }
};

export default vocabular;
