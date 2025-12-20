
import JobApplicationRow from "./JobApplicationRow";
const ApplicationList = ({ applications }) => (
  <table className="table">
    <tbody>
      {applications.map((application, index) => (
        <JobApplicationRow
          key={application._id}
          application={application}
          index={index}
        />
      ))}
    </tbody>
  </table>
);
export default ApplicationList