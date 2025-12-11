import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const truncateWords =(text , limit) =>{
    const words = text.split(' ')
    if(words.length <= limit)
      return text
    return words.slice(0, limit).join(' ')+"..."
  }
  const {
    title,
    location,
    company,
    salaryRange,
    description,
    requirements,
    _id
  } = job;
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 p-4">
          <figure>
            <img className="w-20" src={company.logo} alt="logo" />
          </figure>
          <div className="">
            <h3 className="text-2xl font-bold">{company.name}</h3>
            <p className="flex items-center">
              <CiLocationOn /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{(truncateWords(description, 10))}</p>

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
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;


