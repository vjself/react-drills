import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(userInput) {
    this.setState({ filterString: userInput });
  }

  render() {
    let list = this.state.list
      .filter(element => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {list}
      </div>
    );
  }
}

export default App;
