import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import MainBody from "./section";
import Footer from "./footer";
import Nav from "./Nav";
//import "./app.css";

function Page() {
  return(
      <div>
        <Nav />
        <Header /> 
        <MainBody />
        <Footer />
      </div>
  )
}
ReactDOM.render(
    <Page />,
    document.getElementById('app')
)


