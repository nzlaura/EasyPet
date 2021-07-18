import React from 'react'
import SearchBar from './SearchBar.jsx'

function Footer () {
  return (
    <>
      <div className="py-8 bg-black">
        <footer id="footer" className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 z-50 bg-black">
          <div className="mx-auto container w-screen bg-black px-4 flex flex-wrap items-center justify-between">
            <div className="lg:flex flex-grow items-center">

              <SearchBar />

              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/register">
                    <span className="ml-2">Sign Up</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/login">
                    <span className="ml-2">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/calendar">
                    <span className="ml-2">Calendar</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/petprofile">
                    <span className="ml-2">Pet Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/contact">
                    <span className="ml-2">Contact</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#/faq">
                    <span className="ml-2">FAQ</span>
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
