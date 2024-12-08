import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import fundUsLogo from "../assets/fundUs-logo.jpg"

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  
  const [theme, setTheme] = useState('light')
  const handletheme = () =>{
      
      setTheme(theme ==='light' ? 'dark' : 'light')
  }

  useEffect(() =>{
      document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  const links = <>
    <div className='text-sm space-x-2'>
      <NavLink to='/' className='hover:underline'>Home</NavLink>
      <NavLink to='/all-campaign-card' className='hover:underline'>All Campaign</NavLink>
      <NavLink to='/add-new-campaign' className='hover:underline'> Add New Campaign</NavLink>
      {
        users && <NavLink to='/my-campaign' className='hover:underline'>My Campaign</NavLink>
      }
      {
        users && <NavLink to='/my-donation'className='hover:underline'>My Donation</NavLink>
      }
    </div>

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
            {links}
          </ul>
        </div>
        <img src={fundUsLogo} className='w-[60px]' />
        <a className="btn btn-ghost text-2xl font-bold">FundUs</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        { users &&
          <div className="text-black pr-2 relative group">
          <img 
          src={users?.photoURL} 
          className='w-10 h-10 rounded-full cursor-pointer'
          title={users?.displayName || "no display name"}
          />
          <div className="absolute bottom-1 right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                {users?.displayName || "No Display Name"}
                            </div>
          
        </div>
        }
        <div>
          {
            users && users?.email ? (
              <button onClick={logOut} className='btn btn-outline'>Logout</button>
            ) : (
              <>
                <NavLink
                to='/login'
                className="btn btn-outline mr-2"
              >Login</NavLink>
              <NavLink
                to='/register'
                className="btn btn-outline"
              >Ragister</NavLink>
              </>
              
            )
          }


        </div>
        <div>
          <input onClick={handletheme} type="checkbox" className="toggle ml-4" defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default Navbar;