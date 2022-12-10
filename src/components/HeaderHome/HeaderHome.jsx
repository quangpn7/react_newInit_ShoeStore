import React from "react";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="">
            The Shoes Shop
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0">
              <NavLink className={"nav-link"} to="/carts">
                <i className="fa fa-cart-plus display-4 text-white fs-3"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderHome;
