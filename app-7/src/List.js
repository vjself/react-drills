import React from "react";
import Todo from "./Todo";
import "./App.css";

export default function List(props) {
  let list = props.list.map((element, index) => {
    return <Todo key={index} list={element} />;
  });
  return <div>{list}</div>;
}
