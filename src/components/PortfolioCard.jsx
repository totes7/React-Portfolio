import React from "react";
import "./pages/styles/Portfolio.css";

function PortfolioCard(props) {
  return (
    <>
      <div class="card text-bg-dark">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.text}
          </p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
