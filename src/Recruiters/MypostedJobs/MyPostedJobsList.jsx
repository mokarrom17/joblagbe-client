import { Link } from "react-router-dom";

const MyPostedJobsList = ({ jobs }) => {
  // ✅ HARD GUARD
  if (!Array.isArray(jobs)) {
    return (
      <div className="text-center mt-10">
        Loading jobs...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Job Level</th>
              <th>Deadline</th>
              <th>Total Applicants</th>
              <th>View Applications</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No jobs found
                </td>
              </tr>
            ) : (
              jobs.map(job => (
                <tr key={job._id}>
                  <td>{job.title}</td>
                  <td>{job.jobLevel}</td>
                  <td>
                    {job.deadline
                      ? new Date(job.deadline).toLocaleDateString()
                      : "No deadline"}
                  </td>
                  <td className="text-center">
                    {job.application_count ?? 0}
                  </td>
                  <td>
                    <Link to={`/applications/${job._id}`}>
                      View Applications
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
