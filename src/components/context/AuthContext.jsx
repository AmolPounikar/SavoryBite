import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if there's a user in localStorage on initial load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Mock login functionality
  const login = (email, password) => {
    // In a real app, you would make an API call here
    return new Promise((resolve, reject) => {
      // Simulate API delay
      setTimeout(() => {
        if (email === "admin@example.com" && password === "password") {
          const user = { id: 1, email, name: "Admin User" };
          setCurrentUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
