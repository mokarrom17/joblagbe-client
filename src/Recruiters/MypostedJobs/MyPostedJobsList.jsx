import { Link } from "react-router-dom";

const MyPostedJobsList = ({ jobs }) => {
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
            {jobs.map(job => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.jobLevel}</td>
                <td>{job.deadline || "No deadline"}</td>
                <td className="text-center">{job.application_count ?? 0}</td>
                <td>
                  <Link to={`/applications/${job._id}`}>
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
