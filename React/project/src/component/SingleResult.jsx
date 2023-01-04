import React from "react";
import "../style/main.css";

export default function SingleResult(props) {
  return (
    <div className="single-res">
      <div class="votes">
        <p>{props.vote} votes</p>
        <p className="answer">{props.answers} answers</p>
        <p className="view">{props.view} views</p>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
