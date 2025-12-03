import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    company_logo,
    jobType,
    category,
    applicatinDeadline,
    salaryRange,
    description,
    company,
    requirements,
    _id
  } = job;
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm h-full">
        <div className="flex items-center gap-4 p-4">
          <figure>
            <img src={company_logo} alt="Shoes" />
          </figure>
          <div className="">
            <h3 class="text-2xl">{company}</h3>
            <p className="flex items-center">
              <CiLocationOn /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <div className="card-actions">
            {requirements.slice(0, 2).map((skill, index) => (
              <div
                key={index}
                className="badge badge-outline bg-[#EFF3FC] text-[#4F5E64] font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
       
            <p>
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
