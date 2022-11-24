import React, { Component } from "react";

import "./contact.css";

class Contact extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <section className="contact container">
        <h2 className="block__heading star__secondary">contact</h2>
        <div className="form">
          <input
            className="form__input"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="form__input"
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <input
            className="form__input"
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
          />
          <textarea
            className="form__input form__message"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button className="btn">Send</button>
        </div>
      </section>
    );
  }
}

export default Contact;
