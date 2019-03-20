import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/4/").then(res => {
      this.setState({
        planet: res.data
      });
    });
  }

  render() {
    const { planet } = this.state;
    return (
      <div className="App">
        <h1>{planet.name}</h1>
        <h1>{planet.orbital_period}</h1>
        <h1>{planet.rotation_period}</h1>
        <h1>{planet.diameter}</h1>
        <h1>{planet.climate}</h1>
        <h1>{planet.gravity}</h1>
        <h1>{planet.terrain}</h1>
        <h1>{planet.surface_water}</h1>
        <h1>{planet.population}</h1>
        <h1>{planet.residents}</h1>
        <h1 />
      </div>
    );
  }
}

export default App;
