import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
 const links = <>
       <li>
          <NavLink to={"/"} className={({isActive})=> isActive ? "text-green-500 border-b-3 border-b-green-600 rounded-none" : ""}><IoHomeOutline />Home</NavLink>
        </li>
        <li>
            <NavLink to={"/timeline"} className={({isActive})=> isActive ? "text-green-500 border-b-3 border-b-green-600 rounded-none" : ""}><RiTimeLine />Timeline</NavLink>
        </li>
        <li>
            <NavLink to={"/stats"} className={({isActive})=> isActive ? "text-green-500 border-b-3 border-b-green-600 rounded-none" : ""}><ImStatsDots />Stats</NavLink>
        </li>
 
 </>

    return (
        <div className='bg-base-300 shadow-sm sticky z-10 top-0'>
           <div className="navbar  container mx-auto">

            {/* dropdown */}
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  <div className="flex-1">
    <a className="text-2xl font-bold">Keen <span className='text-green-600'>Keeper</span></a>
  </div>
  <div className="flex-none font-semibold">
    <ul className="menu menu-horizontal px-1 gap-4">
     {links}
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;