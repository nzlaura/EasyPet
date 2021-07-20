import React, { useState } from 'react'
import SignOff from './SignOff'
import { IfAuthenticated, IfNotAuthenticated } from './authenticated'

function Navbar ({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3 ml-96 w-4/6">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ml-96 w-4/6">

          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
            </button>
          </div>

          <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id="example-navbar-danger">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <IfNotAuthenticated>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#/register">
                    <span className="ml-2">Sign Up</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#/login">
                    <span className="ml-2">Login</span>
                  </a>
                </li>
              </IfNotAuthenticated>
              <IfAuthenticated>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#/calendar">
                    <span className="ml-2">Calendar</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#/user">
                    <span className="ml-2">User Profile</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#/petprofile">
                    <span className="ml-2">Pet Profile</span>
                  </a>
                </li>

              </IfAuthenticated>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#/contact">
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#/about">
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#/faq">
                  <span className="ml-2">FAQ</span>
                </a>
              </li>
              <IfAuthenticated>
                <li className="nav-item">
                  <SignOff/>
                </li>
              </IfAuthenticated>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
