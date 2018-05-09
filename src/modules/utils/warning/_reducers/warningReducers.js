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

    case 'WARNING_REMOVE':
      return {
        ...state,
        warnings: state.warnings.filter(el => el !== action.payload),
      };

    default:
      return state;
  }
};

export default warning;

