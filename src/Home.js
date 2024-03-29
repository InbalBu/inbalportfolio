import React, { useState } from "react";
import "./Home.css";
import { ReactComponent as YourSvg } from './coding-animate.svg';

function Home() {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // Toggle Menu
  const [show, setShow]  = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="svg__bg">
              <img src="https://portfolio-tahrer.netlify.app/static/media/coding-animate.f7ba9589d82145c8437b.svg" alt="" />
          </div>
          {/* social icons */}
          <div className="left__navbar">
            <a
              className="social-icon"
              target=""
              href="https://www.linkedin.com/in/inbal-buckris-full-stack/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a
              class="social-icon"
              target=""
              href="https://github.com/InbalBu"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a class="social-icon" target="" href="tel:0526809922">
              <ion-icon name="call-outline"></ion-icon>
            </a>
          </div>
          <div className="animation"></div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact Me</li>
              </a>
            </ul>
          </div>
           {/* Toogle Menu */}
           <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Skills">Skills</a>
            </li>
            <li className="sideNavbar">
              <a href="#Projects">Projects</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Hi, I'm</h1>
              <h2 className="home__text pz__10">Inbal Buckris</h2>
              <h3 className="home__text sweet">Full-Stack Developer.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
