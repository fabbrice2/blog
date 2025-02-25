import React from "react";
import Layout from "../components/Layout";
import RecentBlog from "../blogcomponents/RecentBlog";
import AllBlog from "../blogcomponents/AllBlog";

function Blog() {
  return (
    <Layout>
      <div className="py-4 md:py-8 space-y-5">
        <h1 class="border-y text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide w-full text-center leading-none">
          THE BLOG
        </h1>
        <RecentBlog />
        <AllBlog />
      </div>
    </Layout>
  );
}

export default Blog;
