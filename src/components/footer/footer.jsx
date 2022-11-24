import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__body">
          <div>
            <h5>Location</h5>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div>
            <h5>AROUND THE WEB</h5>
            <div className="footer__icons">
              <span className="footer__icon-container">
                <i className="fa-brands fa-facebook-f icon-footer"></i>
              </span>
              <span className="footer__icon-container">
                <i className="fa-brands fa-twitter icon-footer"></i>
              </span>
              <span className="footer__icon-container">
                <i className="fa-brands fa-linkedin-in icon-footer"></i>
              </span>
              <span className="footer__icon-container">
                <i className="fa-brands fa-dribbble icon-footer"></i>
              </span>
            </div>
          </div>
          <div>
            <h5>ABOUT FREELANCER</h5>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
        </div>
        <p className="footer__copyright">Copyright © Your Website 2021</p>
      </footer>
    );
  }
}
