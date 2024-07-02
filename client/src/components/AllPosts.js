import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationControls from "./PaginationControls.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/posts/allpost")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des articles:", error)
      );
  }, []);

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = posts.slice(start, end);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All blog posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((post) => (
          <div key={post.id} className="">
            <img
              src={post.image_path}
              alt={post.title}
              className="w-full h-64 object-cover py-5"
            />
            <div className="post-info flex flex-col gap-3">
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
      <PaginationControls
        hasNextPage={end < posts.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}

export default AllPosts;
