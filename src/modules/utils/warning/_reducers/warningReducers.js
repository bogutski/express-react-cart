const initialState = {
  warnings: [],
};

const warning = (state = initialState, action) => {
  switch (action.type) {
    case 'WARNING_ADD':
      return {
        ...state,
        warnings: [
          ...state.warnings,
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default warning;

