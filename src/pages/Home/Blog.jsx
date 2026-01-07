import { motion as Motion } from "framer-motion";
import { MdOutlineDownloading } from "react-icons/md";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mx-4 md:mx-8 lg:mx-12 mb-12 bg-white mt-12">
      <div className="text-center mb-8 text-black">
        <h2 className="text-3xl md:text-4xl lg:text-center mb-4 font-bold">
          News and Blog
        </h2>
        <p className="lg:text-lg md:text-base text-sm">
          Get the latest news, updates and tips
        </p>
      </div>
      <Swiper
        loop={blogs.length >= 3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id} className="px-2 h-140">
            <Motion.div
              className="border-2 border-[#E5E7EB] rounded-xl h-full flex flex-col p-4 bg-white"
              whileHover={{
                y: -1,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Motion.img
                src={blog.thumbnail}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <span className="text-blue-600 text-sm mb-2">
                {blog.category}
              </span>

              <h2 className="text-xl font-semibold mb-3 line-clamp-2 min-h-14">
                {blog.title}
              </h2>

              <p className="text-color line-clamp-4 min-h-24">{blog.excerpt}</p>

              <div className="mt-auto pt-4 flex items-center gap-4">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{blog.author.name}</p>
                  <p className="text-sm">{blog.publishedDate}</p>
                </div>
                <span className="ml-auto text-sm">{blog.readTime}</span>
              </div>
            </Motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/blogs">
        <button className="btn btn-xs sm:btn-sm lg:btn-md bg-[#05264E] hover:bg-[#007aff] text-white mt-8 mx-auto flex items-center gap-2">
          <MdOutlineDownloading className="text-lg" />
          <span>Load More Posts</span>
        </button>
      </Link>
    </div>
  );
};

export default Blog;
