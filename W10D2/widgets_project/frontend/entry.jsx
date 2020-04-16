import React from "react";
import ReactDOM from "react-dom";
import Widget from "./widget";

// Widget in project
document.addEventListener( "DOMContentLoaded", (event) => {
    const root = document.getElementById("root")
    ReactDOM.render(<Widget />, root)
})
// console.log("Working!")
