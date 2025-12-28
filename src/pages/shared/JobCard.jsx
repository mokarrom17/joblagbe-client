import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  if (!job) return null;

  const {
    title = "N/A",
    location = "N/A",
    company = {},
    salaryRange = {},
    description = "",
    requirements = [],
    _id,
  } = job;

  const truncateWords = (text, limit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length <= limit
      ? text
      : words.slice(0, limit).join(" ") + "...";
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-[0_8px_24px_rgba(149,157,165,0.15)] 
  hover:shadow-[0_12px_32px_rgba(149,157,165,0.25)]  hover:border-primary/40 transition"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-lg object-contain"
          src={company.logo || "https://via.placeholder.com/80"}
          alt="logo"
        />

        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {company.name || "Company"}
          </h3>
          <p className="flex items-center text-xs text-gray-500 mt-1">
            <CiLocationOn className="mr-1" /> {location}
          </p>
        </div>
      </div>

      {/* Job title */}
      <Link to={`/jobs/${_id}`}>
        <h2 className="text-base font-medium mt-4">{title}</h2>
      </Link>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {truncateWords(description, 14)}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {requirements.slice(0, 2).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary */}
      <p className="text-sm text-gray-500 mt-4">
        Salary:{" "}
        <span className="font-medium text-gray-800">
          {salaryRange.min
            ? `${salaryRange.min} – ${salaryRange.max} ${salaryRange.currency}`
            : "Negotiable"}
        </span>
      </p>

      {/* Action */}
      <Link to={`/jobs/${_id}`} className="block mt-5">
        <button className="btn btn-sm bg-[#007aff] text-white hover:bg-[#05264E] w-full font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
