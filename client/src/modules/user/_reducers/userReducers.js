const initialState = {
  userList: [], // User list for admin
  userInfo: {}, // Current user info
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LIST':
      return {
        ...state,
        userList: action.payload,
      };

    case 'USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default user;
