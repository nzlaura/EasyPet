import React from 'react'
import SearchBar from './SearchBar.jsx'
import { Route } from 'react-router-dom'

import { IsAuthenticated, NotAuthenticated } from './authenticated'

function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function Footer () {
  return (
    <>
      <div className="py-8 bg-black">
        <footer id="footer" className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 z-50 bg-black">
          <div className="mx-auto container w-screen bg-black px-4 flex flex-wrap items-center justify-between">
            <div className="lg:flex flex-grow items-center">

              <Route path="/" component={SearchBar} />

              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/home">
                    <span onClick={topFunction} className="ml-2">Home</span>
                  </a>
                </li>
                <IsAuthenticated>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#/register">
                      <span onClick={topFunction} className="ml-2">Sign Up</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#/login">
                      <span onClick={topFunction} className="ml-2">Login</span>
                    </a>
                  </li>
                </IsAuthenticated>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/calendar">
                    <span onClick={topFunction} className="ml-2">Calendar</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/petprofile">
                    <span onClick={topFunction} className="ml-2">Pet Profile</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/user">
                    <span onClick={topFunction} className="ml-2">User Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/about">
                    <span onClick={topFunction} className="ml-2">About</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/contact">
                    <span onClick={topFunction} className="ml-2">Contact</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/faq">
                    <span onClick={topFunction} className="ml-2">FAQ</span>
                  </a>
                </li>
                <li className="nav-item">
                  <p className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">© 2021 EasyPet • Your digital pet diary</p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default Footer
