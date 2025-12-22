import React from "react";
import { Link } from "react-router-dom";

const JobApplicationRow = ({ application, index }) => {
  const { company, title, resume, _id } = application;

  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div className="flex items-center gap-4">
          <img
            src={company?.logo || "/placeholder-logo.png"}
            className="w-12 h-12"
            alt="Company"
          />
          <div>
            <p className="font-bold">{company?.name}</p>
            <p className="text-sm opacity-50">HR: {company?.hr_name}</p>
          </div>
        </div>
      </td>

      <td>{title}</td>
      <td>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          View Resume
        </a>
      </td>

      <td>
        <Link to={`/jobs/${_id}`}>
          <button className="btn btn-sm btn-primary">Show Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
