import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="title-home">
          <h1 className="display-4">Antonio Manno</h1>
          <h2>Junior Full-Stack Web Developer</h2>
        </div>
        <div className="button-links">
          <Link to="about" role="button" className="button">
            <i className="fa-regular fa-user"></i>
            <br></br>
            About
          </Link>
          <Link to="portfolio" role="button" className="button">
            <i className="fa-regular fa-folder"></i>
            <br></br>
            Portfolio
          </Link>
          <Link to="contact" role="button" className="button">
            <i className="fa-regular fa-envelope"></i>
            <br></br>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
