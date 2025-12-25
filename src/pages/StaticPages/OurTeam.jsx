import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.log("Error loading team data", error));
  }, []);

  return (
    <div className="px-12 mb-12">
      <div className="text-center mt-12 space-y-3 max-w-2xl mx-auto">
        <h1 className="text-2xl text-[#66789C] font-semibold">OUR COMPANY</h1>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante
          viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a
          blandit tempor, velit magna pellentesque risus, at congue tellus dui
          quis nisl.
        </p>
      </div>
      {/* Team card */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        {teamData.map((member) => (
          <Motion.div
            key={member.id}
            whileHover={{
              scale: 1,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border border-[#E5E7EB] rounded-lg p-6 text-center"
          >
            <img
              src={member.image}
              className="w-30 h-30 mt-6 mx-auto rounded-full object-cover"
              alt="member.name"
            />
            <h1 className="mt-4 font-bold">{member.name}</h1>
            <p className="text-[#66789C] text-sm">{member.role}</p>
            <div>
              <p className="text-[#66789C] text-xs flex items-center justify-center gap-2">
                <CiLocationOn />
                {member.location}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-400">({member.reviews})</span>
            </div>
            <div className="flex justify-center gap-4 text-2xl my-8">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <TiSocialLinkedinCircular />
              </Link>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
