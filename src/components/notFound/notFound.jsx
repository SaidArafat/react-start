import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 Error </h1>
        <p class="zoom-area">Page not found</p>
        <section class="error-container">
          <span class="four">
            <span class="screen-reader-text">4</span>
          </span>
          <span class="zero">
            <span class="screen-reader-text">0</span>
          </span>
          <span class="four">
            <span class="screen-reader-text">4</span>
          </span>
        </section>
        <p className="link-container">
          The page you are looking for does't exist or an other error occurred,
          go back to home page
        </p>
        <div class="link-container">
          <Link to="home" class="btn">
            Go Back
          </Link>
        </div>
      </div>
    );
  }
}
