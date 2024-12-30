import React from "react";
import logo from "../assets/logo2.png";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#161616] flex-col">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-48 h-80 sm:w-36 sm:h-36 lg:w-48 lg:h-80 mb-4 sm:mb-6"
      />

      {/* Preloader animation */}
      <div className="flex space-x-1 sm:space-x-2">
        {/* Circle 1 */}
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary-200 rounded-full animate-wave1"></div>
        {/* Circle 2 */}
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary-200 rounded-full animate-wave2"></div>
        {/* Circle 3 */}
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary-200 rounded-full animate-wave3"></div>
        {/* Circle 4 */}
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary-200 rounded-full animate-wave4"></div>
      </div>
    </div>
  );
};

export default Preloader;
