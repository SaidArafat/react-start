import React, { Component } from "react";
import "./portfolio.css";
import cabin from "../../assets/images/portfolio/cabin.png";
import circus from "../../assets/images/portfolio/circus.png";
import game from "../../assets/images/portfolio/game.png";
import submarine from "../../assets/images/portfolio/submarine.png";

// NOTE: I have tried to create react Modal but in the end I cannot.
// Just did it using vanilla JavaScript.
// You can find the source code in script.js file.
// This code here is not depend on bootstrap.

export default class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio container">
        <h2 className="block__heading star__secondary">Portfolio</h2>

        <section className="modal-container">
          <div className="show-modal">
            <img src={cabin} alt="pic " />
          </div>
          <div className="show-modal">
            <img src={game} alt=" game " />
          </div>
          <div className="show-modal">
            <img src={submarine} alt="pic " />
          </div>
          <div className="show-modal">
            <img src={cabin} alt="cabin  .." />
          </div>
          <div className="show-modal">
            <img src={circus} alt="circus " />
          </div>
          <div className="show-modal">
            <img src={cabin} alt="cabin " />
          </div>

          <div className="modal hidden">
            <button className="close-modal">&times;</button>
            <h1 className="modal__title">I'm a modal window</h1>
            <div className="modal__image"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <button className="close-modal">x close window</button>
          </div>
          <div className="overlay hidden"></div>
        </section>
      </section>
    );
  }
}
