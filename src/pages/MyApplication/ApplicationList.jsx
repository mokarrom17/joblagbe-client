import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const application = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl mb-6">
        Jobs Applied so far:{application.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-fixed w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="w-12 text-center align-middle">#</th>
              <th className="w-[320px] align-middle">Company Name</th>
              <th className="w-[260px] align-middle">Job Title</th>
              <th className="w-40 align-middle">Resume</th>
              <th className="w-40 align-middle pl-22">Details</th>
            </tr>
          </thead>

          <tbody>
            {application.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
