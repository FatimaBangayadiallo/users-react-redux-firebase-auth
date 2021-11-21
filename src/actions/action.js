// actio to add or create a newUser with redux-
export const AddNewUser = (newUser) => {
  newUser.id = Math.random().toString(36).slice(2);
  return {
    type: "ADD_USER",

    payload: newUser,
  };
};
