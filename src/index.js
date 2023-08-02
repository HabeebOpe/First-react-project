import React from "react";
import ReactDOM from "react-dom";

const head = (
    <nav>
        <h1>My name Habeebullah and this is my first react project</h1>
        <h2>Fun facts about react</h2>
        <ul>
            <li>First released in 2013</li>
            <li>Created by Jordan Walke</li>
            <li>Maintained by Facebook</li>
            <li>A Javascript library</li>
        </ul>
    </nav>
    
)
/*document.getElementById("app").append(JSON.stringify(head))
*/
ReactDOM.render(
    head,
    document.getElementById("app")
)