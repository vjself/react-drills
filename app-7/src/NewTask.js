import React from "react";
import "./App.css";

export default function NewTask(props) {
  return <button onClick={props.add}>Add</button>;
}
