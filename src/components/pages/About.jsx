import React from "react";
import { Link } from "react-router-dom";
import CvPdf from "../../cv.pdf";
import "./styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 title-about">
            <h1 className="display-4">Antonio Manno</h1>
            <h5>Junior Full-Stack Web Developer</h5>
            <hr />
            <a
              href={CvPdf}
              download="CV-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">
                <i className="fa-regular fa-file"></i>
                <br></br>
                Download CV.pdf
              </button>
            </a>
          </div>
          <div className="col-lg-7 text">
            <p>
              Highly motivated and freshly certified Full Stack Web Developer
              with a specialization in Front End development. Eager to leverage
              my newly acquired skills and knowledge to contribute effectively
              to dynamic web development projects. Committed to delivering
              innovative, user-centric solutions while continuously enhancing my
              proficiency in cutting-edge technologies.
            </p>
            <h4>Skills</h4>
            <hr />
            <ul>
              <li>
                <strong>Technologies:</strong> HTML5, CSS3, JavaScript, Python
              </li>
              <li>
                <strong>Frameworks:</strong> jQuery, React, Bootstrap, Django,
                Flask, Streamlit
              </li>
              <li>
                <strong>Databases:</strong> PostgreSQL, MySQL
              </li>
              <li>
                <strong>Version Control:</strong> Git, Github
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
