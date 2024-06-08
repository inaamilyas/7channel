import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenuMob = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const location = useLocation();
  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <nav className="background-color p-5 sticky top-0 z-[100]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenuMob}
            >
              <span className="absolute -inset-0.5"></span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                className={`${
                  !isOpenMenu ? "block" : "hidden"
                }  text-white w-[25px] transition-all transition-1000`}
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                className={`${
                  isOpenMenu ? "block" : "hidden"
                }  text-white w-[25px] transition-all transition-1000`}
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="">
              <Link
                to={"/"}
                className="text-[25px] font-bold cursor-pointer text-color"
              >
                Elision Advertising
              </Link>
            </div>
            <div className="hidden md:ml-6 lg:block">
              <div className="flex space-x-4">
                <NavLink
                  to={"/"}
                  className="rounded-md px-4 py-2 navbar-item text-color"
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className="rounded-md px-4 py-2 navbar-item text-color"
                >
                  About Us
                </NavLink>
                <NavLink
                  to={"/what-we-offer"}
                  className="rounded-md px-4 py-2 navbar-item text-color"
                >
                  What We Offer
                </NavLink>
                <NavLink
                  to={"/who-we-are"}
                  href="#"
                  className="rounded-md px-4 py-2 navbar-item text-color"
                >
                  Who We Are
                </NavLink>
                <NavLink
                  to={"contact"}
                  className="bg-[#6495ed] px-5 py-3 rounded-md text-[#FFFFFF] font-bold border-[1px] border-[#FFFFFF]  hover:bg-[#FFFFFF] hover:text-[#6495ed] transition-all duration-700 "
                >
                  GET IN TOUCH
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className="lg:hidden tranistion duration-1000" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to={"/"}
              className="navbar-item text-white block rounded-md px-3 py-2 text-center"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className=" navbar-item text-white  block rounded-md px-3 py-2  text-center"
            >
              About Us
            </NavLink>
            <NavLink
              to={"/what-we-offer"}
              className=" navbar-item text-white  block rounded-md px-3 py-2  text-center"
            >
              What We Offer
            </NavLink>
            <NavLink
              to={"/who-we-are"}
              className=" navbar-item text-white  block rounded-md px-3 py-2  text-center"
            >
              Who We Are
            </NavLink>
            <NavLink
              to={"/contact"}
              className=" navbar-item text-white  block rounded-md px-3 py-2  text-center"
            >
              GET IN TOUCH
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
