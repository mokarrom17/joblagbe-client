import React, { useEffect, useState } from "react";
import Newsletter from "../Home/Newsletter";
import { motion as Motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mx-12">
      <div>
        <div className="mt-16 mb-8">
          <h2 className="text-4xl font-bold">Latest Posts</h2>
          <p className="text-lg font-medium text-[#66789C] ">
            Don't miss the trending news
          </p>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-2/3 grid grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Motion.div
              whileHover={{
                y: -1,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              key={blog.id}
              className="border-2 border-gray-200 rounded-xl p-4 bg-white"
            >
              <img
                className="h-48 w-full object-cover rounded-lg mb-4"
                src={blog.thumbnail}
                alt="blog.title"
              />
              <span className="text-[#3C65F5] text-sm mb-2 block">
                {blog.category}
              </span>
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-sm text-[#66789C] line-clamp-4 mb-4">
                {blog.excerpt}
              </p>
              <div className="flex gap-4 items-center mt-auto pt-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={blog.author.avatar}
                  alt="blog.author.name"
                />
                <div>
                  <p className="font-medium">{blog.author.name}</p>
                  <p className="text-sm text-[#66789C]">{blog.publishedDate}</p>
                </div>
                <span className="ml-auto text-sm text-[#66789C]">
                  {blog.readTime}
                </span>
              </div>
            </Motion.div>
          ))}
        </div>
        <div className="w-1/3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl max-w-xl mx-auto p-3 gap-2 shadow">
            <input
              type="search"
              className="flex-1 outline-none px-4 py-3 text-lg text-gray-700 rounded-lg sm:rounded-none"
              placeholder="Search..."
            />
            < IoSearchOutline 
            className="text-2xl"
            />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default AllBlogs;
