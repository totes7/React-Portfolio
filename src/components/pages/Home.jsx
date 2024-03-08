import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="container hero">
        <div className="row title-home">
          <div className="col-md-12">
            <h1 className="display-4">Antonio Manno</h1>
            <h2>Junior Full-Stack Web Developer</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Link to="about" role="button" className="button">
              <i className="fa-regular fa-user"></i>
              <br></br>
              About
            </Link>
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="portfolio" role="button" className="button">
              <i className="fa-regular fa-folder"></i>
              <br></br>
              Portfolio
            </Link>
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="contact" role="button" className="button">
              <i className="fa-regular fa-envelope"></i>
              <br></br>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
