import React from "react";
import Header from "../components/Header";
import RecentPosts from "../components/RecentPosts";
import AllPosts from "../components/AllPosts";
import Footer from "../components/Footer";

function Blog() {
  return (
    <div className="px-4 sm:lg:px-6 md:px-8 lg:px-10">
      <Header />
      <div className="w-full text-center border-y-2 py-5  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">WELCOME TO THE BLOG</div>
      <RecentPosts />
      <AllPosts />
      <Footer />
    </div>
  );
}

export default Blog;
