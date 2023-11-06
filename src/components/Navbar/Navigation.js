import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light bg-info">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Pick-N-Make
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active" exact={true}>
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Recipes">
                  Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactUs">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
