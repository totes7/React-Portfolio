import React from "react";
import { Link } from "react-router-dom";
import "./styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 title-about">
            <h1 className="display-4">Antonio Manno</h1>
            <h4>Junior Full-Stack Web Developer</h4>
            <Link to="/portfolio" role="button" className="button">
              <i className="fa-regular fa-folder"></i>
              <br></br>
              Portfolio
            </Link>
          </div>
          <div className="col-lg-7 text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tempora rerum iusto facilis hic minus totam amet incidunt ullam
              quibusdam et cumque vero blanditiis optio delectus, aperiam
              nesciunt expedita nihil. Distinctio beatae, commodi labore
              praesentium aperiam accusantium quos iste expedita voluptatum in
              molestiae natus maxime quis optio molestias porro unde non
              similique rerum, nulla repellendus veniam, facilis voluptates.
              Eos, doloremque? Temporibus ab possimus, officiis tempora
              reiciendis iusto earum aperiam perspiciatis eius amet consequatur.
              Ipsum odit deleniti minus facere hic accusantium cum, pariatur
              nemo iure, saepe ad impedit nostrum voluptatum in? Similique,
              earum recusandae omnis architecto sint, magnam fugit ex, hic at
              perspiciatis a! Eligendi eaque exercitationem perferendis ut,
              consequuntur aperiam ducimus a sint excepturi temporibus dolores
              atque recusandae quae expedita. Dignissimos necessitatibus autem
              non? Quidem, dolorem! Obcaecati facilis nobis suscipit temporibus
              perspiciatis ut, expedita possimus distinctio, cum officiis
              reprehenderit repellendus non nihil quis vitae incidunt, dolorum
              dolore vel natus perferendis? Corporis blanditiis debitis ea
              necessitatibus minus obcaecati culpa vel optio! Totam porro culpa,
              ut eum asperiores repudiandae praesentium inventore alias repellat
              odio harum modi aliquam adipisci beatae id minus facere. Voluptas,
              quo. Sit quidem optio alias ipsum earum? Nostrum error provident
              perspiciatis exercitationem doloribus laborum neque, consequuntur
              aut dolorum at voluptate explicabo nam sapiente, ad, ea odio
              recusandae voluptates nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
