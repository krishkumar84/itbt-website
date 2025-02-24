import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="main bg-white">
        <nav className="bg-white-800 h-20 flex text-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className=" font-bold text-xl">Your Logo</div>
            <div className="hidden gap-4 md:flex space-x-4 ">
              <Link to="/">
                <h1>Home</h1>
              </Link>
              <Link to="/commitee">
                <h1>Commitee</h1>
              </Link>
              <Link to="/registration">
                <h1>Registration</h1>
              </Link>
              <Link to="/venues">
                <h1>Venues</h1>
              </Link>
              <Link to="/contact">
                <h1>Contact</h1>
              </Link>
            </div>
            <div className="md:hidden">
              <nav className=" w-56">
                <div className="flex flex-col md:flex-row items-center justify-between md:z-10">
                  <button
                    className="md:hidden text-black ml-52"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? (
                      "Close"
                    ) : (
                      <button onClick={toggleMenu} className="">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          ></path>
                        </svg>
                      </button>
                    )}
                  </button>

                  {/* Navbar links */}
                  <div
                    className={`md:flex md:items-center md:flex-col font-semibold h-60 mt-44 bg-white w-56 ml-24 mb-4 z-10 md:justify-center ${
                      isMenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex items-center gap-28">
                      <Link to="/">
                        {" "}
                        <div
                          className="text-black py-2  mx-2 mb-2 md:mb-0 hover:bg-gray-600"
                          onClick={toggleMenu}
                        >
                          Home
                        </div>
                      </Link>
                      <div
                        onClick={toggleMenu}
                        className="mb-2 text-black text-3xl"
                      >
                        ×
                      </div>
                    </div>
                    <Link to="/commitee">
                      {" "}
                      <div
                        className="text-black py-2  mx-2 mb-2 md:mb-0 hover:bg-gray-600"
                        onClick={toggleMenu}
                      >
                        Commitee
                      </div>
                    </Link>
                    <Link to="/registration">
                      {" "}
                      <div
                        className="text-black py-2  mx-2 mb-2 md:mb-0 hover:bg-gray-600"
                        onClick={toggleMenu}
                      >
                        Registration
                      </div>
                    </Link>
                    <Link to="/venues">
                      {" "}
                      <div
                        className="text-black py-2  mx-2 mb-2 md:mb-0 hover:bg-gray-600"
                        onClick={toggleMenu}
                      >
                        Venue
                      </div>
                    </Link>
                    <Link to="/contact">
                      {" "}
                      <div
                        className="text-black py-2  mx-2 mb-2 md:mb-0 hover:bg-gray-600"
                        onClick={toggleMenu}
                      >
                        Contact Us
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
}

export default Navbar