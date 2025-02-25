import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main
      className={`px-6 sm:px-9 md:px-16 duration-700 font-retink ${
        darkMode ? "bg-white text-black" : "bg-dark text-white"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
