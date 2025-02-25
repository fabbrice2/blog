import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import NewsLetter from "./pages/NewsLetter";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/newsletter" element={<NewsLetter />} />
    </Routes>
  );
}

export default App;
