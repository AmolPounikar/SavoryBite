import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Function to check admin status
  const checkAdminStatus = () => {
    setIsAdmin(sessionStorage.getItem("isAdmin") === "true");
  };

  useEffect(() => {
    checkAdminStatus(); // Check admin status on mount

    // Set interval to check admin status every 500ms (ensures real-time update)
    const interval = setInterval(checkAdminStatus, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // sessionStorage.removeItem("isAdmin"); // Remove admin flag
    // setIsAdmin(false); // Update state immediately
    navigate("/logout"); // Redirect to home
  };

  // Desktop menu items
  const desktopMenuItems = [
    "Home",
    "Gallery",
    "About",
    "Services",
    "Menu", // Menu should always be visible
    ...(isAdmin ? ["Menu Form"] : []), // Add "Menu Form" if isAdmin is true
    "Contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
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
            {desktopMenuItems.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Menu Form"
                    ? "/add-menu"
                    : `/${item.toLowerCase()}`
                }
                className={({ isActive }) =>
                  `text-sm font-bold hover:text-amber-600 transition-colors ${
                    isActive ? "text-amber-600" : "text-gray-700"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            {/* Show Login or Logout based on authentication status */}
            {isAdmin ? (
              <button
                onClick={handleLogout}
                className="flex items-center px-5 py-2 bg-red-600 text-white rounded-full text-sm font-bold hover:bg-red-700 transition-colors"
              >
                <LogOut className="h-4 w-5 mr-2" />
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-5 py-2 bg-amber-600 text-white rounded-full text-sm font-bold hover:bg-amber-700 transition-colors"
              >
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {desktopMenuItems.map((item) => (
                <NavLink
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Menu Form"
                      ? "/add-menu"
                      : `/${item.toLowerCase()}`
                  }
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 hover:text-amber-600 transition-colors ${
                      isActive ? "bg-amber-50 text-amber-600" : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}

              {/* Show Login or Logout based on authentication status */}
              {isAdmin ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-2 font-bold" />
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-amber-600 hover:bg-amber-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
