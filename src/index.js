import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const head = (
    <nav>
        <h1>my name Habeebullah</h1>
        <h2>a student of Osun state </h2>
        <h5>I love coding</h5>
    </nav>
    
)
/*document.getElementById("app").append(JSON.stringify(head))
*/
ReactDOM.render(
    head,
    document.getElementById("app")
)