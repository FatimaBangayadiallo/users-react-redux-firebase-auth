export const registerWithEmailAndPassword = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// -----------------------------------action for the login---------------------
export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// ----------------------------------------------action to connect with google-------------------------
export const connectWithGoogle = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    console.log(firebase);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// ---------------------------------------------------action to sign out a user-----------------------
export const logOut = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then((response) => {
        console.log(response);
        console.log("logOut");
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
