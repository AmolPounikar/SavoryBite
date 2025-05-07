import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/animation/404Animation.json";

const NotFound = () => {
  return (
    <div className="h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-200">
          <Lottie
            animationData={notFoundAnimation}
            style={{ width: "50%", maxWidth: "500px", margin: "auto" }}
          />
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <NavLink
          to="/"
          className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors"
        >
          Return to Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
