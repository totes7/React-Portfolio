import React from "react";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <div className="hero">
        <div>
          <h1 className="display-4">Antonio Manno</h1>
          <h2>Junior Full-Stack Web Developer</h2>
        </div>
        <div className="btn-links">
          <button type="button" className="btn btn-outline-secondary">
            <i className="fa-solid fa-question"></i>
            <br></br>
            About
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Portfolio
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
