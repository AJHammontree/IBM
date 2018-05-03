import React, { Component } from "react";
import LoginForm from "./pages/login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <a className="login"> Login </a>
        <br /> <br />
        <h1> Sports equipment inventory </h1>
        <br /><br />
        <a className="add"> Add Product </a>
        <a className="update"> Update Product </a>
        <ul>
          <li> Product Id:</li>
          <li> Product name: </li>
          <li> Product Description: </li>
          <li> Related Product: </li>
        </ul>
      </div>
    );
  }
}

export default App;
