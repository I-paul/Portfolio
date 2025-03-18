import React from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './components/styling/App.css';

import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";
const App = ()=>{
  const hero = useRef();
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    gsap.fromTo('.main-desc',{duration:1.2,x:'-100%',ease:'circ.out'},{duration: 1.2 ,x:'100%',ease:'circ'});
  }
);
  return (
    <>
    <Navbar/>
    <section id="home">
      <h1>Israel Paul</h1>
    </section>
    {/* <Projects/>
    <Contact/> */}
    </>
  )
}

export default App;