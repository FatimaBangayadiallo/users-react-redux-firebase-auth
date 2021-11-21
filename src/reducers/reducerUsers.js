const initialState = {
  authUsers: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    console.log(action.payload);
    return { ...state, authUsers: [...state.authUsers, action.payload] };
  }

  return state;
};
export default reducer;
