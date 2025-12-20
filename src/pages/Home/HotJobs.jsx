
import JobCard from "../shared/JobCard";
import { Link } from "react-router-dom";

const HotJobs = ({ jobs }) => {
  //   const jobs = use(jobsPromise);
  // ✅ only first 12 jobs
  const previewJobs = jobs?.slice(0, 12) || [];
  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold ">Jobs of the day</h2>
        <p className="text-[#66789C] text-lg font-medium">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-12">
        {previewJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
      {/* ✅ View All Jobs Button */}
      <div className="flex justify-center mt-12">
        <Link to="/allJobs">
          <button className="btn btn-outline btn-primary px-10">
            View All Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobs;
