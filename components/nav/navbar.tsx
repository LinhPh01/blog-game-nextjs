"use client";

import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const closeNavbar = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent relative">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="nav-link">Home</li>
          <li className="nav-link">Create</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Portfolio</li>
          <li className="nav-link">Blog</li>
        </ul>
        <div className="hidden lg:inline-flex gap-2 items-center">
          <button className="w-20 h-10 bg-white text-slate-400 uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-black duration-300">
            Login
          </button>
        </div>
        <button
          onClick={toggleNavbar}
          className="inline-flex lg:hidden items-center"
        >
          <FiMenu className="text-3xl" />
          {isOpen && (
            <nav className="absolute top-20 left-0 right-0 bg-black border-b-[1px] border-gray-500 py-40 z-10">
              <ul className="flex flex-col lg:flex-row items-center gap-8 uppercase text-sm font-semibold px-4">
                <li className="nav-link">Home</li>
                <li className="nav-link">Pages</li>
                <li className="nav-link">Services</li>
                <li className="nav-link">Portfolio</li>
                <li className="nav-link">Blog</li>
                <button className="w-20 h-10 bg-white text-slate-400 uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-black duration-300">
                  Login
                </button>
                {/* Thêm các mục menu khác vào đây */}
              </ul>
            </nav>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
