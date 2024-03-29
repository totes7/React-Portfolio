import React from "react";
import { Link } from "react-router-dom";
import "./styles/Portfolio.css";
import PortfolioCard from "../PortfolioCard.jsx";

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 title-portfolio">
              <h1>Portfolio</h1>
              <hr />
            </div>
          </div>
          <div className="row cards-section">
            <Link
              target="_blank"
              to="https://pouch-finance-tracker.netlify.app/"
              role="button"
              className="col-lg-3 card-wrapper"
            >
              <PortfolioCard
                image="https://github.com/totes7/React-Portfolio/blob/main/src/images/portfolio-1.jpg?raw=true"
                title="Pouch Finance Tracker"
                text="Finance tracking app made with React."
              />
            </Link>
            <Link
              target="_blank"
              to="https://totes7.github.io/project-portfolio-two/"
              role="button"
              className="col-lg-3 card-wrapper"
            >
              <PortfolioCard
                image="https://github.com/totes7/React-Portfolio/blob/main/src/images/portfolio-2.jpg?raw=true"
                title="FIFA WC Quiz"
                text="Interactive website made with html, css and javascript."
              />
            </Link>
            <Link
              target="_blank"
              to="https://totes7-dinemate.herokuapp.com/"
              role="button"
              className="col-lg-3 card-wrapper"
            >
              <PortfolioCard
                image="https://github.com/totes7/React-Portfolio/blob/main/src/images/portfolio-3.jpg?raw=true"
                title="DineMate"
                text="Restaurant website built with Django framework."
              />
            </Link>
            <Link
              target="_blank"
              to="https://heritage-housing-pp5-7e5087ac3438.herokuapp.com/"
              role="button"
              className="col-lg-3 card-wrapper"
            >
              <PortfolioCard
                image="https://github.com/totes7/React-Portfolio/blob/main/src/images/portfolio-4.jpg?raw=true"
                title="Heritage Housing Study"
                text="Data Analytics reserch with Jupyter in a Streamlit app."
              />
            </Link>
          </div>
          <div className="row projects-link">
            <div className="col-lg-12">
              <h4 className="link-text">
                Check out the rest of my projects on my GitHub profile
              </h4>
            </div>
            <div className="col-lg-12 button-row">
              <Link
                target="_blank"
                to="https://github.com/totes7?tab=repositories"
                role="button"
                className="link-button"
              >
                <i class="fa-brands fa-github"></i>
                <br />
                GuitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
