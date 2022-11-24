import React, { Component } from "react";
import "./home.css";

import avatars from "../../assets/images/avatars.svg";

class Home extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <section className="home container">
        <img className="home__image" src={avatars} alt="home avatar" />
        <h1 className="block__heading">Start React</h1>
        <p className="subheading">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </section>
    );
  }
}

export default Home;
