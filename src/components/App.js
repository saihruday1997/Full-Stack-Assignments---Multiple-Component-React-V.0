import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <p data-ns-test="project-name">Name of the Project</p>
        <p data-ns-test="project-description">Description of the Project</p>
      </>
    );
  }
}

export default App;
