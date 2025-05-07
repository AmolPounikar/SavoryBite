import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Toaster from "../components/ui/Toaster";
import { logoutAdmin } from "../services/firebase";

const Logout = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const adminStatus = sessionStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);

    // If not logged in, redirect to login
    if (!adminStatus) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.dispatchEvent(new Event("storage"));
    try {
      await logoutAdmin();
      setIsAdmin(false);
      setToast({ message: "Logged out successfully!", type: "success" });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Logout error:", error);
      setToast({
        message: "Error logging out. Please try again.",
        type: "error",
      });
    }
  };

  if (!isAdmin) {
    return null; // Don't render anything if not logged in
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-serif font-bold text-gray-800">
          Confirm Logout
        </h1>
        <p className="text-gray-500 mt-2">We hope to see you again soon!</p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 transition-colors"
            onClick={handleLogout}
          >
            Yes, Log Out
          </button>
          <button
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-400 transition-colors"
            onClick={() => navigate("/add-menu")}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Toaster Component */}
      {toast && (
        <Toaster
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Logout;
