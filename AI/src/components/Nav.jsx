import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo (2).png";
import DarkMode from "./DarkMode";

function Nav() {
  return (
    <div>
      <nav className="flex bg-blue-400 text-xl pl-8 pr-20 pt-5 pb-5 items-center justify-between font-Fredoka">
        <div className="flex w-400px ml-32 items-center">
          <div className=" h-8 w-8 truncate">
            <img className="" src={logo} alt="Logo" />
          </div>
          <p className=" text-2xl font-Anta">JohnAI</p>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li>
              <FontAwesomeIcon
                className=" absolute z-10 ml-3 text-lg translate-y-1/2 "
                icon={faSearch}
              />
              <input
                className=" outline-none p-1 rounded-full border-none bg-white pl-12 h-13 w-full text-lg"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </li>
            <li className=" mb-2">
              <DarkMode />
            </li>
            <li>
              <Link to="/About">Home</Link>
              <p className=" w-8 translate-x-3 h-1 absolute bg-slate-950 rounded-full"></p>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Waitlist">Wait List</Link>
            </li>
            <li>
              <Link to="/Faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
