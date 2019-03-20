import React, { Component } from "react";

import "./App.css";
import List from "./List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      inputLine: ""
    };

    this.add = this.add.bind(this);
  }

  handleInput(value) {
    this.setState({ inputLine: value });
  }

  add() {
    this.setState({
      list: [...this.state.list, this.state.inputLine],
      inputLine: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <List key={index} list={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.inputLine}
            placeholder="Enter new task"
            onChange={e => this.handleInput(e.target.value)}
          />

          <button onClick={this.add}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
