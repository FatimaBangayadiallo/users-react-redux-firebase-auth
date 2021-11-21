// actio to add or create a newUser with redux-
export const AddNewUser = (newUser) => {
  newUser.id = Math.random().toString(36).slice(2);
  return {
    type: "ADD_USER",

    payload: newUser,
  };
};
// action to update a particular user inside the users array;

export const editUser = (id, updatedUser) => {
  return {
    type: "EDIT_USER",
    payload: { id, updatedUser },
  };
};
// action to delete a particular user---------------
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
