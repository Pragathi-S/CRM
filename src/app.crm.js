import React, { Component } from "react";
import Crm from "./crm.js";
import "./style.crm.css";

class App extends Component {
    render() {
      console.log("App Component Loaded");
      return (
        <Crm/>
      );
    }
  }
  
  export default App;