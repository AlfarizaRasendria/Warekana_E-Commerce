import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg d-flex sticky-top"
      style={{ backgroundColor: "#0F5152" }}
    >
      <div
        className="container-fluid py-3 d-flex justify-content-between"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        {/* Warekana */}
        <a className="navbar-brand text-light fw-bold fs-5" href="../about">
          Warekana
        </a>

        {/* Responsive toggle */}
        <button
          className="navbar-toggler"
          style={{ borderColor: "white", textEmphasisColor: "white" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Nav */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="../about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="../topUp">
                Top Up
              </a>
            </li>
          </ul>

          {/* Right Nav */}
          <form className="d-flex pe-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
          </form>
          {/* Usable dropdown for Profile logo */}
          <ul className="navbar-nav d-flex ">
            <li className="nav-item pe-3">
              <a className="nav-link text-light" href="../wishlist">
                <IoHeartOutline style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link text-light" href="../cart">
                <IoCartOutline style={{ fontSize: "2rem" }} />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaRegUser style={{ fontSize: "22px" }} />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="../auth/login">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
