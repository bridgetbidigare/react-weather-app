import React from "react";
import './App.css';
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather city="Denver" />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
