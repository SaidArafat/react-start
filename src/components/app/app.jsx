import "./app.css";
import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "../masterLayout/masterLayout";
import Home from "./../home/home";
import Contact from "./../contact/contact";
import About from "./../about/about";
import Portfolio from "../portfolio/portfolio";
import NotFound from "../notFound/notFound";

class App extends Component {
  routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "About", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
      ],
    },
  ]);

  render() {
    return (
      <>
        <RouterProvider router={this.routes} />
      </>
    );
  }
}
export default App;
