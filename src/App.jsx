import React from "react";
import Navbar from "./components/Navbar/navbar";
import Socials from "./components/Socials/socials";
import './App.css';

const App = ()=>{

  return (
    <div className="app">
      <Navbar />
      <Socials />
    </div>
  )
}

export default App;