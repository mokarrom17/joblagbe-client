import React from "react";
import banner from "../../assets/Static/about-banner.jpeg";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";
const ContactUs = () => {
  return (
    <div>
      <div
        className="hero h-60"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content justify-start w-full">
          <div className=" text-white text-left pl-16">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
            <p className="mb-5">Get the latest news, updates and tips</p>
          </div>
        </div>
      </div>
      {/* COMPANY ADDRESS SECTION */}
      <div className="max-w-6xl mx-auto">
        <div className=" my-12 bg-[#EEF5FF] flex gap-8 py-16 px-10 text-gray-700">
          <div>
            <h3 className="font-bold text-lg">JobLagbe Corporation</h3>
            <p className="mt-2">
              205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA
            </p>
            <p className="mt-2">Email: support@joblagbe.com</p>
            <Link className="text-[#3C65F5] text-sm mt-2 inline-block">
              VIEW MAP
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold">London</h3>
              <p>21B Treadmill Dr.Syracuse</p>
              <p>CT 254</p>
            </div>

            <div>
              <h3 className="font-bold">Chicago</h3>
              <p>38 Fitzherbert Ave, Richardson</p>
              <p>CA 623</p>
            </div>

            <div>
              <h3 className="font-bold">Sydney</h3>
              <p>18 Fitzherbert Ave</p>
              <p>NSW 3514</p>
            </div>

            <div>
              <h3 className="font-bold">Singapore</h3>
              <p>410 Palesko Rd</p>
              <p>Singapore 3154</p>
            </div>
            <div>
              <h3 className="font-bold">Sysney</h3>
              <p>3891 Ranchview Dr. Richardson</p>
              <p>California 62639</p>
            </div>
            <div>
              <h3 className="font-bold">San Francisco</h3>
              <p>4140 Parker Rd. Allentown</p>
              <p>New Mexico 31134</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-2/3">
            <h1 className="text-lg text-[#3C65F5]">Contact Us</h1>
            <div>
              <h1 className="text-3xl my-4 font-semibold">Get in touch</h1>
              <p className="text-lg text-[#66789C]">
                The right move at the right time saves your investment. live{" "}
                <br /> the dream of expanding your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-gray-700 placeholder:text-gray-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Enter your name"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-gray-700 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your name"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-gray-700 placeholder:text-gray-400"
              />
              <input
                type="tell"
                name="phone"
                placeholder="Enter your name"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <div className="my-8">
              <fieldset className="fieldset">
                <textarea
                  name="message"
                  className="w-full h-56 p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-black placeholder:text-gray-400 placeholder:text-lg"
                  placeholder="Tell us about yourself"
                ></textarea>
              </fieldset>
            </div>
            <div className="mt-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  By clicking contact us button, you agree to our terms and
                  policy.
                </p>
              </div>
              <button className="btn mt-4 py-6 btn-xs sm:btn-sm lg:btn-md hover:bg-[#05264E] bg-[#007aff] text-white gap-2">
                <GoMail className="text-lg" />
                <span className="text-lg">Send message</span>
              </button>
            </div>
          </div>
          <div className="w-1/3">
            {/* About Images Section */}
            <div className="flex justify-center mt-16">
              <div className="relative w-95 h-105">
                {/* Back Top Image */}
                <img
                  src="https://images.unsplash.com/photo-1560264418-c4445382edbc"
                  alt=""
                  className="absolute top-0 left-0 w-72 h-56 object-cover rounded-xl border border-[#DCE2EE]"
                />

                {/* Front Large Image */}
                <img
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39"
                  alt=""
                  className="absolute top-32 left-10 w-80 h-72 object-cover rounded-xl border border-[#DCE2EE]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
