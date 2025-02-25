import React, { useState } from "react";

function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-4 md:py-8 relative">
      <div className="flex items-center justify-between">
        <div>
          <a href="/" className="cursor-pointer">Lionel Messi</a>
        </div>
        <ul className="hidden md:flex items-center gap-5">
          <li>
            <a href="/" className="cursor-pointer">
              Blog
            </a>
          </li>
          <li>
            <a href="/project" className="cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="/newsletter" className="cursor-pointer">
              Newsletter
            </a>
          </li>
          <li
            className="cursor-pointer duration-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </li>
        </ul>
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed inset-0 h-full px-7 sm:px-14 md:px-28 flex flex-col justify-center items-center transition-all duration-300 ease-in-out 
          ${darkMode ? "bg-white text-black" : "bg-dark text-white"}`}
        >
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="ri-close-large-line"></i>
          </button>

          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold mb-8">Your Name</div>
            <ul className="flex flex-col items-center gap-5 text-xl">
              <li>
                <a href="/" className="cursor-pointer hover:opacity-80">
                  Blog
                </a>
              </li>
              <li>
                <a href="/project" className="cursor-pointer hover:opacity-80">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="cursor-pointer hover:opacity-80">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/newsletter"
                  className="cursor-pointer hover:opacity-80"
                >
                  Newsletter
                </a>
              </li>
            </ul>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-8 p-2 bg-gray-200 text-black rounded-full flex items-center gap-2 transition duration-300 hover:bg-gray-400"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
