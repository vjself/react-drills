import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLine: ""
    };
  }

  handleChange = val => {
    this.setState({
      inputLine: val
    });
  };

  render() {
    return (
      <div className="App">
        <input
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <br />
        <span className="App">{this.state.inputLine}</span>
      </div>
    );
  }
}

export default App;
