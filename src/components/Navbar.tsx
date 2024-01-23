import React from 'react'
import { CircleUserRound } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='http://localhost:3000/Cars' className="link link-hover">Add Car</a></li>
        <li><a href='http://localhost:3000/Contract' className="link link-hover">Add Contract</a></li>
        <li><a href='http://localhost:3000/AllCars' className="link link-hover">Available Cars</a></li>
        <li><a href='http://localhost:3000/AllContracts' className="link link-hover">All Contracts</a></li>
        <li><a href="http://localhost:3000/" className="link link-hover">About us</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">G-Rent</a>
  </div>

  <div className="navbar-end">
    <div className="dropdown dropdown-bottom dropdown-end">
    <div tabIndex={0} role="button" className="btn m-1"><CircleUserRound/></div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='http://localhost:3000/Accounts' className="link link-hover">Sign in</a></li>
        <li><a href='http://localhost:3000/Login' className="link link-hover">Login</a></li>
    </ul>
  </div>
  
  </div>
</div>
  )
}
