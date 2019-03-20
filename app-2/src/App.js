import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["spaghetti", "ice-cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    const { list } = this.state;
    let newList = list.map((item, i) => {
      return (
        <ul key={i}>
          <li>{item}</li>
        </ul>
      );
    });
    return (
      <div className="App">
        <h4>{newList}</h4>
      </div>
    );
  }
}

export default App;
