import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Edit from "./allComponents/editUser";
import Register from "./allComponents/Register";
import Login from "./allComponents/Login";
import ProtectedRoute from "./allComponents/protectedRoute";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ProtectedRoute exact path="/" component={App} />
        <ProtectedRoute path="/edit/:id" component={Edit} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  );
};
export default Router;
