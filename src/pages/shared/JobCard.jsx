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
    <div className="card bg-base-100 w-full shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 p-4">
        <figure>
          <img
            className="w-20"
            src={company.logo || "https://via.placeholder.com/80"}
            alt="logo"
          />
        </figure>
        <div>
          <h3 className="text-2xl font-bold">{company.name || "Company"}</h3>
          <p className="flex items-center">
            <CiLocationOn /> {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{truncateWords(description, 10)}</p>

        <div className="card-actions">
          {requirements.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline bg-[#EFF3FC] text-[#4F5E64] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <p>
          Salary:{" "}
          {salaryRange.min
            ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency}`
            : "Negotiable"}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
