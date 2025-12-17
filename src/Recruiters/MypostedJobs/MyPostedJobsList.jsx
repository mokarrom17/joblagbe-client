import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobsList = ({ jobsCreatedByPromise }) => {
  const myJobs = use(jobsCreatedByPromise);

  return (
    <div>
      <h2>Jobs created by me: {myJobs.length}</h2>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">
          Job Summary: Applications Count
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3 text-left">Job Title</th>
                <th className="border p-3 text-left">Job Level</th>
                <th className="border p-3 text-left">Deadline</th>
                <th className="border p-3 text-center">Total Applicants</th>
                <th className="border p-3 text-center">View Applications</th>
              </tr>
            </thead>

            <tbody>
              {myJobs?.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{job.title}</td>
                  <td className="border p-3">{job.jobLevel}</td>
                  <td className="border p-3">
                    {job.deadline ? job.deadline : "No deadline"}
                  </td>
                  <td className="border p-3 text-center">
                    {job.totalApplicants ?? 0}
                  </td>
                  <td className="border p-3"><Link to={`/applications/${job._id}`}>View Application</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
