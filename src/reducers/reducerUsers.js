const initialState = {
  authUsers: [],
};

const reducer = (state = initialState, action) => {
  // -------------------action to add a new user--------------------------
  if (action.type === "ADD_USER") {
    console.log(action.payload);
    return { ...state, authUsers: [...state.authUsers, action.payload] };
  }
  // --------------------------action edit a particular user-------------------------------
  if (action.type === "EDIT_USER") {
    const updatedUsers = state.authUsers.map((item) => {
      if (item.id === action.payload.id) {
        return action.payload.updatedUser;
      }
      return item;
    });
    return { ...state, authUsers: updatedUsers };
  }

  // --------------------------------------action to delete a particular user----------------
  if (action.type === "DELETE_USER") {
    const undeletedUsers = state.authUsers.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, authUsers: undeletedUsers };
  }
  if (action.type === "SET_ALL_USERS") {
    return { ...state, authUsers: action.payload };
  } else return state;
};
export default reducer;
