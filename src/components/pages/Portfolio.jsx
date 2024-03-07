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
            <Link target="_blank" to='https://totes7.github.io/project-portfolio-one/' role="button" className="col-lg-3 card-wrapper">
              <PortfolioCard
                image="./src/images/portfolio-1.jpg"
                title="Basketball Tournament"
                text="Landing and registration pages made with html and css."
              />
            </Link>
            <Link target="_blank" to='https://totes7.github.io/project-portfolio-two/' role="button" className="col-lg-3 card-wrapper">
              <PortfolioCard 
                image="./src/images/portfolio-2.jpg"
                title="FIFA WC Quiz"
                text="Interactive website made with html, css and javascript."
              />
            </Link>
            <Link target="_blank" to='https://totes7-dinemate.herokuapp.com/' role="button" className="col-lg-3 card-wrapper">
              <PortfolioCard 
                image="./src/images/portfolio-3.jpg"
                title="DineMate"
                text="Restaurant website built with Django framework."
              />
            </Link>
            <Link target="_blank" to='https://heritage-housing-pp5-7e5087ac3438.herokuapp.com/' role="button" className="col-lg-3 card-wrapper">
              <PortfolioCard 
                image="./src/images/portfolio-4.jpg"
                title="Heritage Housing Study"
                text="Data Analytics reserch with Jupyter in a Streamlit app."
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
