import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image="http://thewondrous.com/wp-content/uploads/2015/05/pictures-of-baby-kittens-1024x768.jpg" />
      </div>
    );
  }
}

export default App;
