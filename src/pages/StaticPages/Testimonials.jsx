import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.log(error));
  }, []);
  return (
      <div className="mx-4 md:mx-8 lg:mx-12 mb-12 bg-white mt-12 py-12">
        <div className={'text-center space-y-2 mb-10 '}>
          <h1 className="text-4xl font-bold">Our happy Customer</h1>
          <p className="text-[#66789C]">
            When it comes to choosing the right web hosting provider, we know how
            easy it <br /> is to get overwhelmed with the number.
          </p>
        </div>
        {/* Cards */}
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="relative px-2">
                {/* Message Box */}
                <div className={'relative border rounded-xl p-4 text-[#66789C] leading-7 bg-white'}>
                    <p className="line-clamp-4">{item.message}</p>
                  {/* Arrow */}
                  <span className="absolute left-8 -bottom-2 w-4 h-4 bg-white border-l border-b rotate-45 -translate-x-1/2"></span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8 mx-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-[#66789C]">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default Testimonials;
