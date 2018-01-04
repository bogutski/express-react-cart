const initialState = {
  userList: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LIST':
      return {
        ...state,
        userList: action.payload,
      };

    default:
      return state;
  }
};

export default user;
