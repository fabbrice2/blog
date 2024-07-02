import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des articles:", error)
      );
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <>
      <h1 className="py-5">Recent blog posts</h1>
      <div className="recent-posts flex flex-col lg:flex-row items-stretch gap-5 pb-5">
        <div className="main  lg:w-1/2 flex flex-col gap-5">
          <img
            src={mainPost.image_path}
            alt={mainPost.title}
            className="main-post-image w-full h-64 lg:h-min"
          />
          <div className="post-info flex-1 flex flex-col">
            <span className="date text-purple">
              {new Date(mainPost.created_at).toLocaleDateString()}
            </span>
            <div className="flex items-center justify-between cursor-pointer">
              <h2>{mainPost.title}</h2>
              <ArrowUpRightIcon className="w-5 h-5" />
            </div>
            <p className="text-gray">{mainPost.description}</p>
            <div className="categories flex gap-2 items-center pt-1">
              {mainPost.categories.split(",").map((category, index) => (
                <span
                  key={index}
                  className="category bg-white px-3 py-1 rounded-full text-red cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="secondary-posts lg:w-1/2 flex flex-col gap-5">
          {secondaryPosts.map((post) => (
            <div
              key={post.id}
              className="secondary-post w-full flex flex-col gap-5 lg:grid lg:grid-cols-2"
            >
              <img
                src={post.image_path}
                alt={post.title}
                className="secondary-post-image w-full h-64 lg:h-min"
              />
              <div className="post-info flex flex-col gap-2 lg:justify-between">
                <span className="date text-purple">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
                <div className="cursor-pointer">
                  <h2>{post.title}</h2>
                </div>
                <p className="text-gray">{post.description}</p>
                <div className="categories flex gap-2 items-center">
                  {post.categories.split(",").map((category, index) => (
                    <span
                      key={index}
                      className="category bg-white px-3 py-1 rounded-full text-red cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentPosts;
