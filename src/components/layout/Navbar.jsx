import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropdownRef = useRef(null);
  const path = useLocation();

  const toggleMenuMob = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    // toggleMenuMob();
    setIsOpenMenu(false);
  }, [location]);

  return (
    <nav className="bg-[black] p-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="">
              <NavLink to={"/"} className="text-[25px] font-bold text-white cursor-pointer active" >Elision Advertising</NavLink>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                <NavLink
                  to={"/"}
                  className=" hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink to={"/about"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                   About Us
                </NavLink>
                <NavLink to={"/what-we-offer"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                   What We Offer
                </NavLink>
                <NavLink to={"/who-we-are"}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Who We Are
                </NavLink>
                <NavLink to={"contact"}
                  className="text-gray-300 bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  GET IN TOUCH
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
             About Us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
             What We Offer
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Who We Are
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
             GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
