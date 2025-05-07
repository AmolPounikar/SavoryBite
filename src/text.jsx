import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkAdminStatus = () => {
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    };
    window.addEventListener("storage", checkAdminStatus);
    return () => window.removeEventListener("storage", checkAdminStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="text-xl md:text-2xl font-serif font-bold">
            Savory<span className="text-amber-600">Bite</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-amber-600 transition-colors ${
                  isActive ? "text-amber-600" : "text-gray-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>

            {isAdmin && (
              <NavLink to="/add-menu" className="nav-link">
                Add Menu
              </NavLink>
            )}

            {isAdmin ? (
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="btn-login">
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/menu"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            {isAdmin && (
              <NavLink
                to="/add-menu"
                className="nav-link-mobile"
                onClick={() => setIsOpen(false)}
              >
                Add Menu
              </NavLink>
            )}

            {isAdmin ? (
              <button onClick={handleLogout} className="btn-logout-mobile">
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn-login-mobile"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
