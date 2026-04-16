import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-green-600 border-b-2 border-green-600 rounded-none" : ""
            }`}>
          <IoHomeOutline /> Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-green-600 border-b-2 border-green-600 rounded-none" : ""
            }`} >
          <RiTimeLine /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-green-600 border-b-2 border-green-600 rounded-none" : ""
            }`} >
          <ImStatsDots /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-300 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">

        {/* dropdown */}
        <div className="flex-none lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 w-52 p-3 shadow bg-base-100 rounded-box">
              {links}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <a className="text-xl sm:text-2xl font-bold">
            Keen <span className="text-green-600">Keeper</span>
          </a>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-medium">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;