import { useLoaderData } from "react-router";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsCoin } from "react-icons/bs";
import { MdAssuredWorkload } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { AiOutlineExperiment } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineLocationOn } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import JobCard from "../shared/JobCard";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  const [relatedJobs, setRelatedJobs] = useState([]);
  useEffect(() => {
    if (!job) return; // wait for main job to load

    fetch(`http://localhost:3000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        // remove the current job from the list
        const filtered = data.filter((j) => j._id !== job._id);
        setRelatedJobs(filtered);
      });
  }, [job]);

  // SAFE GUARD
  if (!job || !job.salaryRange) {
    return <p className="text-center mt-10">Loading job details...</p>;
  }

  return (
    <div className="px-10">
      <img
        className="w-full h-72 object-cover rounded-lg my-8"
        src={job.banner}
      />
      <div className="w-3/4">
        <h1 className="text-4xl font-bold my-4">{job.title}</h1>
        <p className="text-[#4F5E64] flex items-center gap-2">
          <IoBriefcaseOutline /> {job.employmentNature}
        </p>
        <p className="text-md my-4">{job.description}</p>
      </div>
      {/* Divider */}
      <div className="divider"></div>

      <div className="w-3/4 ">
        <div className=" border rounded-lg mb-8 p-8 bg-white shadow-sm ">
          <h2 className="text-4xl font-bold">Employment Information</h2>
          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <LiaIndustrySolid className="text-blue-500 text-2xl" />
                <div className="flex flex-row items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Industry
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.industry}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <BsCoin className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Salary
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.salaryRange.min} - {job.salaryRange.max}{" "}
                    {job.salaryRange.currency}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdAssuredWorkload className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Job Type
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.jobType}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <VscVmActive className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Status
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <RxPerson className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Job Level
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.jobLevel}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <AiOutlineExperiment className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Experience
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <RxLapTimer className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Deadline
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.deadline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdOutlineLocationOn className="text-blue-500 text-2xl" />
                <div className="flex items-center gap-4">
                  <p className="text-md font-semibold text-gray-500 w-32">
                    Location
                  </p>
                  <p className="text-gray-800 text-lg font-semibold">
                    {job.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 space-y-8">
          {/* Requirements */}
          <div>
            <h1 className="text-3xl font-semibold">Requirements</h1>
            <ul className="text-md ml-6 mt-2 list-disc">
              {(job.requirements || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Responsibilities</h1>
            <p className="text-md ml-6 mt-2">
              {(job.responsibilities || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">
              Essential Knowledge, Skills, and Experience
            </h1>
            <p className="text-md ml-6 mt-2">
              {(job.essentialKnowledgeSkillsExperience || []).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Preferred Experience</h1>
            <p className="text-md ml-6 mt-2">
              {job.preferredKnowledgeSkillsExperience.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="divider"></div>
        <div className="flex gap-10">
          <div className="card-actions justify-start">
            <Link to={`/job-apply/${job._id}`}>
              <button className="btn btn-primary text-lg p-5 hover:bg-[#002246] text-white">
                Apply Now
              </button>
            </Link>
          </div>
          <div className="card-actions justify-start">
            <Link>
              <button className="btn text-lg border-2 hover:bg-[#002246] hover:text-white rounded-md p-5">
                Save Job
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center mb-8">
        <h2 className="text-4xl font-bold">Featured Jobs</h2>
        <p className="text-lg text-gray-500">
          Get the latest news, updates and tips
        </p>
      </div>

      <div className="my-10 px-5">
        <Swiper
          slidesPerView={1}
          loop={relatedJobs.length > 4}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {relatedJobs.map((item) => (
            <SwiperSlide key={item._id} className="h-auto">
              <Link to={`/jobs/${item._id}`}>
                <div className="h-full">
                  <JobCard job={item} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JobDetails;
