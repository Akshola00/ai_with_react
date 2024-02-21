import React from "react";
import { Link } from "react-router-dom";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Nav() {
  return (
    <div>
      <nav className="flex bg-blue-400 pl-8 pr-20 pt-5 pb-5 items-center justify-between font-Fredoka">
        <div className="">
          Lorem ipsum dolor sit amet.
          {/* <img src={logo} alt="" /> */}
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li>
            <FontAwesomeIcon icon={faCoffee} />
              <input
                className=" outline-none p-3 rounded-2xl border-none bg-white pl-12 h-13 w-full text-xl"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </li>
            <li>
              <Link to="/About">Home</Link>
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
