import reducer from "../reducers/reducerUsers";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  authUsersState: reducer,
  firebase: firebaseReducer,
});
