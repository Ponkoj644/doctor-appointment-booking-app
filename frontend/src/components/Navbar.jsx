import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  // FOR NAVIGATION //
  const navigate = useNavigate();

  // FOR PROFILE BUTTON //

  // State for mobile menu//
  const [showMenu, setShowMenu] = useState(false);

  const [token, setToken] = useState(true);

  return (
    <div className=" flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* logo */}
      <img
        onClick={() => navigate("/")}
        className=" w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Links */}
      <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* button */}
      <div className=" flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile "
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className=" min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className=" hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className=" hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className=" hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className=" bg-primary text-white px-6 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        {/* Mobile Menu */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer hover:scale-110 transition-all  relative"
          src={assets.menu_icon}
          alt="Mobile Menu"
        />

        {/* Mobile Menu Links */}
        <div
          className={`${
            showMenu ? "fixed w-full" : " w-0 h-0"
          }  md:hidden absolute left-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all duration-200`}
        >
          <div className=" flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Mobile Logo" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Icon"
              className=" w-6 cursor-pointer hover:w-7 transition-all"
            />
          </div>

          <ul className=" flex flex-col items-end  text-right gap-2 mt-5 px-5 text-lg font-medium transition-all duration-400 uppercase ">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className=" px-4 py-2 rounded inline-block  hover:-translate-x-2 transition-transform">
                Home
              </p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className=" px-4 py-2 rounded inline-block  hover:-translate-x-2 transition-transform">
                All Doctors
              </p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className=" px-4 py-2 rounded inline-block   hover:-translate-x-2 transition-transform">
                About
              </p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className=" px-4 py-2 rounded inline-block  hover:-translate-x-2 transition-transform ">
                Contact
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
