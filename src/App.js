import logo from "./logo.svg";
import "./App.css";
import React from "react";
import DisplayUsers from "./allComponents/displayUsers";

class App extends React.Component {
  render() {
    return (
      <>
        <DisplayUsers />
      </>
    );
  }
}

export default App;
