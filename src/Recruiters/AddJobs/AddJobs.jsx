import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AddJobs = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const data = Object.fromEntries(fromData.entries());

    // process salary range data
    const {
      companyName,
      companyLogo,
      "company.hrName": hrName,
      "company.hrEmail": hrEmail,
      min,
      max,
      currency,
      ...newJob
    } = data;

    // Create proper nested objects
    newJob.company = {
      name: companyName,
      logo: companyLogo,
      hr_name: hrName,
      hr_email: hrEmail,
    };

    // Salary range
    newJob.salaryRange = { min, max, currency };

    // Convert comma-separated fields into arrays
    newJob.requirements = newJob.requirements
      ? newJob.requirements.split(",").map((item) => item.trim())
      : [];

    newJob.responsibilities = newJob.responsibilities
      ? newJob.responsibilities.split(",").map((item) => item.trim())
      : [];

    newJob.essentialKnowledgeSkillsExperience =
      newJob.essentialKnowledgeSkillsExperience
        ? newJob.essentialKnowledgeSkillsExperience
            .split(",")
            .map((item) => item.trim())
        : [];

    newJob.preferredKnowledgeSkillsExperience =
      newJob.preferredKnowledgeSkillsExperience
        ? newJob.preferredKnowledgeSkillsExperience
            .split(",")
            .map((item) => item.trim())
        : [];

    console.log(newJob); // This will now show arrays correctly

    // save job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "This new job has been saved and published.",
            icon: "success",
            draggable: true,
          });
        }
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-6xl mx-auto my-10">
      <form
        onSubmit={handleAddJob}
        className="bg-white shadow-md rounded-xl p-8 space-y-8 "
      >
        <h1 className="text-3xl font-bold border-l-4 border-blue-500 pl-3">
          Add New Job
        </h1>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">Banner Image URL</label>
            <input
              type="text"
              name="banner"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium">Industry</label>
            <input
              type="text"
              name="industry"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Employment Nature</label>
            <select
              name="employmentNature"
              className="select select-bordered w-full mt-2"
            >
              <option value="">Select one</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Job Level</label>
            <select
              name="jobLevel"
              className="select select-bordered w-full mt-2"
            >
              <option value="">Select one</option>
              <option>Entry-Level</option>
              <option>Mid-Level</option>
              <option>Senior-Level</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Experience</label>
            <input
              type="text"
              name="experience"
              className="input input-bordered w-full mt-2"
              placeholder="e.g. 2-3 years"
            />
          </div>

          <div>
            <label className="font-medium">Job Type</label>
            <select
              name="jobType"
              className="select select-bordered w-full mt-2"
            >
              <option value="">Select one</option>
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Deadline</label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>
        {/* Location */}
        <div>
          <label className="font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full mt-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Full Job Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full mt-2"
            rows="4"
          ></textarea>
        </div>
        {/* Company Information */}
        <div className="bg-gray-50 p-5 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Company Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-medium">Company Logo URL</label>
              <input
                type="text"
                name="companyLogo"
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-medium">HR Name</label>
              <input
                type="text"
                name="company.hrName"
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-medium">HR Email</label>
              <input
                type="email"
                name="company.hrEmail"
                defaultValue={user.email}
                className="input input-bordered w-full mt-2"
              />
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="bg-gray-50 p-5 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Salary Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Minimum Salary */}
            <input
              type="text"
              name="min"
              placeholder="Minimum Salary"
              className="input input-bordered w-full"
            />

            {/* Maximum Salary */}
            <input
              type="text"
              name="max"
              placeholder="Maximum Salary"
              className="input input-bordered w-full"
            />

            {/* Currency */}
            <select name="currency" className="select select-bordered w-full">
              <option value="">Currency</option>
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>

        {/* Requirements & Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">
              Requirements (comma separated)
            </label>
            <input
              type="text"
              name="requirements"
              className="input input-bordered w-full mt-2"
              placeholder="JavaScript, React, Node.js"
            />
          </div>

          <div>
            <label className="font-medium">
              Responsibilities (comma separated)
            </label>
            <input
              type="text"
              name="responsibilities"
              className="input input-bordered w-full mt-2"
              placeholder="Develop software, Code Review"
            />
          </div>

          <div>
            <label className="font-medium">
              Essential Knowledge (comma separated)
            </label>
            <input
              type="text"
              name="essentialKnowledgeSkillsExperience" // <-- Add this!
              className="input input-bordered w-full mt-2"
              placeholder="Frontend frameworks, Backend architecture, API design"
            />
          </div>

          <div>
            <label className="font-medium">
              Preferred Knowledge (comma separated)
            </label>
            <input
              type="text"
              name="preferredKnowledgeSkillsExperience"
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="font-medium">Status</label>
          <select name="status" className="select select-bordered w-full mt-2">
            <option>Active</option>
            <option>Closed</option>
          </select>
        </div>

        <Link to="/">
          <button className="btn btn-primary w-full hover:bg-[#002246] hover:text-white mt-4">
            Add Job
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddJobs;
