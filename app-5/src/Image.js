import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className="App">
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Image;
