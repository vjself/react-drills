import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
  }

  handleUser = val => {
    this.setState({
      user: val
    });
  };

  handlePassword = val => {
    this.setState({
      password: val
    });
  };

  login = () => {
    const { user, password } = this.state;
    alert(`User: ${user} Password: ${password}`);
  };

  render() {
    const { user, password } = this.state;
    return (
      <div className="App">
        <input
          onChange={e => {
            this.handleUser(e.target.value);
          }}
        />
        <input
          onChange={e => {
            this.handlePassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            this.login(user, password);
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default App;
