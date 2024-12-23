import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from "../assets/logo.png"
import { FaHome } from 'react-icons/fa';
import { RiProfileFill } from 'react-icons/ri';

const Navbar = () => {
  const {user,singOutUser} = useContext(AuthContext)
  const handleSignOutUser  = () => {
    singOutUser()
    .then((result) =>{
      console.log("SignOut Successfully",result);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const links = <>
    <ul className="gap-5 flex">
    <button className="btn text-white btn-sm bg-blue-400 cursor:pointer"><NavLink to="/">Home</NavLink><FaHome /></button>
    <button className="btn text-white btn-sm bg-blue-400 cursor:pointer"><NavLink to="/myApplications">My Applications</NavLink><RiProfileFill /></button>
    
    </ul>
  </>
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
          links
        }
      </ul>
    </div>
    <div className="flex flex-col">
    <img className="w-12" src={logo} alt="" />
    <p className="font-bold text-sm text-blue-400">Job-Portal</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <button onClick={handleSignOutUser} className="btn btn-sm bg-red-400 text-white">Log Out</button>
      </> : <>
      <Link to="/login" className="btn btn-sm bg-blue-400 text-white">Sign In</Link>
      <button  className="btn btn-link text-blue-400"><Link to="/register">Register</Link></button>
      </>
    }
  </div>
</div>
  );
};

export default Navbar;
<button className="btn btn-link">Link</button>
