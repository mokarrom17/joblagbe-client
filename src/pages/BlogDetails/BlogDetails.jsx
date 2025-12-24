import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Newsletter from "../Home/Newsletter";
const BlogDetails = () => {
  const blog = useLoaderData();
  if (!blog) {
    return <div className="text-center mt-20 text-xl">Blog not found</div>;
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="px-16">
          <h3 className="text-4xl  m-5 font-bold text-center">{blog.title}</h3>
          <div className="flex justify-between items-center mb-6 max-w-3xl mx-auto">
            {/* LEFT → Author */}
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={blog.author.avatar}
                alt={blog.author.name}
              />
              <span className="font-medium text-gray-800">
                {blog.author.name}
              </span>
            </div>

            {/* RIGHT → Date + Read time together */}
            <div className="flex items-center gap-4 text-gray-600">
              <p>{blog.publishedDate}</p>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {blog.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p className="leading-8 text-lg" key={index}>
                  {block.text}
                </p>
              );
            }

            if (block.type === "image") {
              return (
                <img
                  className="w-full rounded-xl h-96 my-4"
                  src={block.src}
                  alt=""
                />
              );
            }
            if (block.type === "list") {
              return (
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3">In ut odio libero</h3>
                  <li key={index} className="my-8 text-lg ml-8">
                    {block.items.map((items, i) => (
                      <li key={i}>{items}</li>
                    ))}
                  </li>
                </div>
              );
            }
          })}
          <div className="divider"></div>
          <div className="flex justify-between">
            <div className="flex gap-3 flex-wrap">
              {blog.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-[#F1F5FF] text-[#0A3472] rounded-xl text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex gap-8 text-2xl text-[#66789C]">
              <p className="text-lg font-bold text-[#66789C]">Share</p>
              <FaFacebookF />
              <FaTwitter />
              <FaPinterest />
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#0A2E5C]">
            Leave a comment
          </h2>

          {/* Textarea */}
          <textarea
            className="w-full border border-[#dce3f3] rounded-lg p-4 h-32 outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            placeholder="Write a comment"
          />

          {/* Checkbox */}
          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" className="mt-1" />
            <p className="text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>

          {/* Button aligned right */}
          <div className="flex justify-end mt-5">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Post comment
            </button>
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default BlogDetails;
