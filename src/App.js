import React from "react";
import './App.css';
import Search from "./Search";
import Date from "./Date";
import Temperature from "./Temperature";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Search />
      <Date />
      <Temperature />
      </div>
    <br />
    <Footer />
    </div>
  );
}

export default App;
