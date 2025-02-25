import React from "react";
import Layout from "../components/Layout";
import AllBlog from "../blogcomponents/AllBlog";

function NewsLetter() {
  return (
    <Layout>
      <div className="space-y-5">
        <div class="text-center py-12 px-6">
          <p class="text-sm text-purple font-bold mb-2">Newsletters</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-4">
            Stories and interviews
          </h1>
          <p class="text-gray-300 max-w-xl mx-auto mb-6">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
          <div class="flex flex-col md:flex-row items-center justify-center gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              class="w-full md:w-72 p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="bg-purple text-white font-medium py-3 px-6 rounded-lg">
              Subscribe
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-4">
            We care about your data in our{" "}
            <a href="#" class="underline">
              privacy policy
            </a>
          </p>
        </div>

        <AllBlog />
      </div>
    </Layout>
  );
}

export default NewsLetter;
