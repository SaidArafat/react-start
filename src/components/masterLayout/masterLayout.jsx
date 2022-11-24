import React, { Component } from "react";
import NavBar from "./../navBar/navBar";
import Footer from "./../footer/footer";
import { Outlet } from "react-router-dom";

export default class MasterLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    );
  }
}
