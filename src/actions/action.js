// actio to add or create a newUser with redux-
export const AddNewUser = (newUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("authUsers")
      .add({
        ...newUser,
        timestamp: getFirestore().FieldValue.serverTimestamp(),
      })
      .then(() => {
        // dispatch({
        //   type: "ADD_USER",
        //   payload: newUser,
        // });
      });
  };
  // newUser.id = Math.random().toString(36).slice(2);
  // return {
  //   type: "ADD_USER",

  //   payload: newUser,
  // };
};
// action to update a particular user inside the users array;

export const editUser = (id, updatedUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("authUsers")
      .doc(id)
      .set(updatedUser)
      .then(() => {});
  };
  // return {
  //   type: "EDIT_USER",
  //   payload: { id, updatedUser },
  // };
};
// action to delete a particular user---------------
export const deleteUser = (id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("authUsers")
      .doc(id)
      .delete()
      .then(() => {});
  };
  // return {
  //   type: "DELETE_USER",
  //   payload: id,
  // };
};
// -action to get all users from the firestore-
export const getAllAuthUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("authUsers")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (Snapshot) => {
          let authUsers = [];
          Snapshot.forEach((doc) => {
            authUsers.push({ ...doc.data(), id: doc.id });
          });
          console.log(authUsers);
          dispatch({
            type: "SET_ALL_USERS",
            payload: authUsers,
          });
        },
        (error) => {}
      );
  };
};
