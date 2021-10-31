import React from "react";
import ReactDOM from "react-dom";

//const name = "Albert";
const number = "9";
const firstName = "Albert";
const lastName = "Boo";

ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
