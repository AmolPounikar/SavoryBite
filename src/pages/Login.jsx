import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import LoginAnimation from "../assets/animation/LoginAnimation.json";
import Toaster from "../components/ui/Toaster";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/firebase";
import Count from "../components/CountDown";

const Login = ({ setIsAdmin = () => {} }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [attempts, setAttempts] = useState(0); // Counts total failed attempts
  const [lockout, setLockout] = useState(false);
  const [lockoutDuration, setLockoutDuration] = useState(0); // In seconds

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (values.email !== "admin@gmail.com") {
        setToast({
          message: "Only admin users are allowed to login",
          type: "error",
        });
        setSubmitting(false);
        return;
      }

      await loginAdmin(values.email, values.password);

      // ✅ Successful Login
      setIsAdmin(true);
      setToast({ message: "Admin logged in successfully!", type: "success" });

      // Reset lockout mechanism
      setAttempts(0);
      setLockout(false);
      setLockoutDuration(0);

      setTimeout(() => {
        navigate("/add-menu");
      }, 1500);
    } catch (error) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts % 3 === 0) {
        // Every 3 failed attempts triggers a lockout, increasing each time
        const newLockoutTime = (newAttempts / 3) * 30;
        setLockout(true);
        setLockoutDuration(newLockoutTime);
        setToast({
          message: `Too many failed attempts. Locked for ${newLockoutTime} seconds.`,
          type: "error",
        });
      } else {
        setToast({
          message: "Invalid Credentials! Only Admin can log in.",
          type: "error",
        });
      }
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Animation Section */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-8">
          <Player
            autoplay
            loop
            src={LoginAnimation}
            className="max-w-[200px] md:max-w-[300px] w-full"
          />
        </div>

        {/* Login Form Section */}
        <div className="md:w-1/2 w-full p-6 sm:p-8">
          <h1 className="text-2xl font-serif font-bold mb-6 text-center">
            Admin Login
          </h1>

          {lockout ? (
            <Count
              seconds={lockoutDuration}
              onComplete={() => setLockout(false)}
            />
          ) : (
            <Formik
              initialValues={{
                email: "admin@gmail.com",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Logging in..." : "Log In"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>

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

export default Login;
