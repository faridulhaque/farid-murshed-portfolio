import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-primary"
          >
            <li>
              <Link smooth to="/">
                Home
              </Link>
            </li>

            <li>
              <Link smooth to="/">
                Projects
              </Link>
            </li>
            <li>
              <Link smooth to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link smooth to="/home">
                About Me
              </Link>
            </li>
            <li>
              <Link smooth to="/home">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Farid Murshed
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link smooth to="/">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="/home">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link smooth to="/home#mine-left">
              About Me
            </Link>
          </li>
          <li>
            <Link smooth to="/home#mine-right">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
