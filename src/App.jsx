import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AddMenu from "./pages/AddMenu";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";
import { Toaster as Sonner, Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

// ✅ Import ScrollToTop
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";

const queryClient = new QueryClient();

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAdminSession = sessionStorage.getItem("isAdmin") === "true";
      setIsAdmin(!!user && isAdminSession);
    });

    return () => unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Scroll to top on route change */}
          <ScrollToTop />

          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/login"
                element={<Login setIsAdmin={setIsAdmin} />}
              />

              {/* Protected Routes */}
              <Route
                path="/logout"
                element={
                  <ProtectedRoute isAdmin={isAdmin}>
                    <Logout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-menu"
                element={
                  <ProtectedRoute isAdmin={isAdmin}>
                    <AddMenu />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
