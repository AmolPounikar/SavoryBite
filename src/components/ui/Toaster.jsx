import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Toaster = ({ message, type = "success", onClose }) => {
  // Automatically close the toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Toast type styles
  const typeStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`fixed bottom-10 right-5 flex items-center justify-between 
  max-w-sm px-4 py-3 border-l-4 rounded-md shadow-lg transition-transform transform 
  ${typeStyles[type]}`}
    >
      <span className="flex-1 text-sm font-medium text-gray-900">
        {message}
      </span>
      <button
        onClick={onClose}
        className="ml-3 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <XMarkIcon className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
      </button>
    </div>
  );
};

export default Toaster;
