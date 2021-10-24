import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../newtradr-logo.svg';

function Navigation(props) {
    return (
      <div className="navigation">
        <nav class="navbar navbar-expand">
          <div class="container">
            <img src={logo} className='logo' />
            <div>
              <ul class="navbar-nav ml-auto">
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/">
                    <h3>Home</h3>
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/about">
                    <h3>About Us</h3>
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/contact">
                    <h3>Contact Us</h3>
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/survey" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/survey">
                    <h3>Survey</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default withRouter(Navigation);  