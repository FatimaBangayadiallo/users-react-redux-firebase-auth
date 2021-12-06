import React from "react";
import { connect } from "react-redux";

// import { firebase } from "react-redux-firebase";
import { Route, Redirect } from "react-router-dom";
// import user from "./user";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  console.log(auth, "i am the auth");
  // if a user is log in
  if (!auth.isLoaded) return null;
  if (!auth.isEmpty) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }
  // if a user is not logged in
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
};

const mSTP = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mSTP)(ProtectedRoute);
