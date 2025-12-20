import JobCard from "../shared/JobCard";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const jobs = useLoaderData(); // ✅ data from loader

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">All Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
