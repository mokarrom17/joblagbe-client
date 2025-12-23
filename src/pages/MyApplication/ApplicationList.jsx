import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ applications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <JobApplicationRow
              key={app._id}
              application={app}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
