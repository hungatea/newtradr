import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../newtradr-logo.svg';

function Navigation() {
    return (
      <>
      <div className="navigation">
          <div class="nav-container1">
                  <Link class="nav-link" to="/">
                    <h3>Home</h3>
                  </Link>
                </div>
                <div class="nav-container">
                  <Link class="nav-link" to="/about">
                    <h3>About Us</h3>
                  </Link>
                  </div>
                <div class="nav-container1">
                  <Link class="nav-link" to="/survey">
                    <h3>Survey</h3>
                  </Link>
                </div>
      </div>
      <Link class="nav-link" to="/">
        <img src={logo} className='logo' />
        </Link>

      </>
    );
  }

export default withRouter(Navigation);  