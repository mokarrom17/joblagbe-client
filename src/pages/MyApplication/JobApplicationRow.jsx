import React from "react";
import { Link } from "react-router";

const JobApplicationRow = ({ application, index }) => {
  const { jobId, company, title, resume } = application;

  return (
    <tr className="align-middle">
      <th className="align-middle text-center">
        <label>{index + 1}</label>
      </th>
      <td className="align-middle">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company.logo} alt="Company Logo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company.name}</div>
            <div className="text-sm opacity-50">HR: {company?.hr_name}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td className="align-middle whitespace-nowrap">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          View Resume
        </a>
      </td>
      <td className="align-middle text-right">
        <Link to={`/jobs/${jobId}`}>
          <button className="btn btn-primary btn-sm">Show Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
