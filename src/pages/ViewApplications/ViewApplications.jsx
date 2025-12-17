import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Application status Updated",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">
        {applications.length} Applications: {job_id}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Resume</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr index={index} key={application._id}>
                <th>{index + 1}</th>
                <td> {application.applicant} </td>
                <td>{application.name || "N/A"}</td>
                <td>
                  <a
                    href={application.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Resume
                  </a>
                </td>

                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select select-md"
                  >
                    <option>Update Status</option>
                    <option>Pending</option>
                    <option>Under Review</option>
                    <option>Call For Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
