import React from "react";
import ReactDOM from "react-dom";
//import "./app.css";

function Nav() {
  return(
      <nav className="nav">
        <img src="./react.png" />
        <ul>
            <li>Gallery</li>
            <li>About</li>
            <li>Donate</li>
        </ul>
      </nav>
  )
}
function Header() {
  return(
      <header>
        <h1>Prophets you should learn from</h1>
      </header>
  )
}
function MainBody() {
  return(
      <section>
        <ul>
            <li>Prophet Muhammad</li>
            <li>Prophet Isa</li>
            <li>Prophet Yusuf</li>
            <li>Prophet Musa</li>
            <li>Prophet Yaqub</li>
        </ul>
      </section>
  )
}
function Footer() {
  return(
      <footer>
        <small>©2023 Habeebullah All Rights Reserved </small>
      </footer>
  )
}
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


