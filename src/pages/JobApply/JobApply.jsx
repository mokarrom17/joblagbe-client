import React from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.name.value;
    const contact = form.contact.value;
    const description = form.description.value;
    const resume = form.resume.value;

    console.log(name, email, contact, description, resume);

    const appliedJob = {
      jobId,
      applicant: user.email,
      resume,
      description
    };

    axios
      .post("http://localhost:3000/applications", appliedJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3 className="text-4xl mb-12">This is Job Apply Page: </h3>
      <form
        onSubmit={handleApplyFormSubmit}
        className="flex justify-center items-center"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border p-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Personal Email"
          />

          <label className="label">Contact Number</label>
          <input
            type="phone"
            name="contact"
            className="input"
            placeholder="Contact Number"
          />

          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            className="input"
            placeholder="Your Description"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
