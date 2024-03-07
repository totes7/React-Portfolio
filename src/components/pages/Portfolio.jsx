import React from "react";
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
            <div className="col-lg-3">
              <PortfolioCard
                image="./src/images/portfolio-1.jpg"
                title="Basketball Tournament"
                text="Landing and registration pages made with html and css."
              />
            </div>
            <div className="col-lg-3">
              <PortfolioCard 
                image="./src/images/portfolio-2.jpg"
                title="FIFA WC Quiz"
                text="Interactive website made with html, css and javascript."
              />
            </div>
            <div className="col-lg-3">
              <PortfolioCard 
                image="./src/images/portfolio-3.jpg"
                title="DineMate"
                text="Restaurant website built with Django framework."
              />
            </div>
            <div className="col-lg-3">
              <PortfolioCard 
                image="./src/images/portfolio-4.jpg"
                title="Heritage Housing Study"
                text="Data Analytics reserch with Jupyter in a Streamlit app."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
