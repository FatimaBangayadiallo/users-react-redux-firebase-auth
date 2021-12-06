import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import firebase from "../firebase/config.js";
import reducer from "./mainReducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
