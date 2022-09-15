import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shownavdropdown, setShowNavDropdown] = useState(false);

  return (
    <>
      <section className="navbar-bg shadow">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              ChAfzal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
		   <NavLink onClick={() => setShowNavDropdown(!shownavdropdown)} className="nav-link dropdown-toggle" to="/service" data-bs-toggle="dropdown">  Services  </NavLink>
		    <ul className={`dropdown-menu ${shownavdropdown ? "show" : " "}`}>
			  <li><NavLink className="dropdown-item" to="#"> Mobile App Development</NavLink></li>
			  <li><NavLink className="dropdown-item" to="#"> Web App  Development </NavLink></li>
			  <li><NavLink className="dropdown-item" to="#"> Snapchat Filters </NavLink></li>
		    </ul>
		</li>                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">                
                {/* <button className="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button> */}
                <button className="btn btn-style" type="submit">
                  Get Your Proposal
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
