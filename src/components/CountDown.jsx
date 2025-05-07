// src/components/Count.jsx
import React, { useEffect, useState } from "react";

const Count = ({ seconds, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete(); // Unlock login form
    }
  }, [timeLeft, onComplete]);

  return (
    <div className="text-center text-red-600 text-lg font-semibold mt-4">
      Too many failed attempts. Please wait {timeLeft} second
      {timeLeft !== 1 && "s"}.
    </div>
  );
};

export default Count;
