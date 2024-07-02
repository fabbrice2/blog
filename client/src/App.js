import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-dark text-white">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
