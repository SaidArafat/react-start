import React, { Component } from "react";

import "./about.css";

class About extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <section className="about container">
        <h2 className="block__heading white__heading">About</h2>
        <div className="about__content">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
      </section>
    );
  }
}

export default About;
