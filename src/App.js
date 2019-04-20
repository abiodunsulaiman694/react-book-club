import React, { Component } from "react";
import FrontendLayout from "./frontend/layouts";
import { Router } from "@reach/router";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Router>
        <FrontendLayout path="/" />
      </Router>
    );
  }
}

export default App;
