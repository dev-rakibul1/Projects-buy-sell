import React, { useEffect, useState } from "react";
import TopBanner from "../shared/topbanner/TopBanner";
import UseTitle from "./../../hook/useTitle/useTitle";

const Blog = () => {
  UseTitle("Blog");
  const [blogs, setBlogs] = useState([]);
  //   const { data: blogs } = useQuery({
  //     queryKey: ["blog"],
  //     queryFn: async () => {
  //       const res = await fetch("http://localhost:5000/blog");
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <TopBanner>Blog page</TopBanner>

      <div className="md:w-[50%] mx-auto px-2 py-7">
        <h2 className="text-3xl text-center py-4 text-secondary">
          Frequently asked question
        </h2>
        <p className="text-center font-light mb-7">
          Some question about our project
        </p>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
          >
            <div className="collapse-title text-xl font-medium">
              <h3 className="text-green-700 font-normal"> {blog?.title}</h3>
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
