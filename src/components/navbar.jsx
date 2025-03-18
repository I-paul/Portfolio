import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './styling/navbar.css';

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  const nav = useRef();
  useGSAP(
    ()=> {
      gsap.from(nav.current,{duration:1,y:'-100%',ease:'bounce'});
    }
  );
  //smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  return (
    <nav className="navbar" ref={nav}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">Israel Paul</span>
          </a>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;