import { useState } from "react";
import JobCard from "../shared/JobCard";
import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const jobs = useLoaderData(); // ✅ data from loader

  const [salary, setSalary] = useState(280);

  return (
    <div className="max-w-2xl md:max-w-5xl lg:max-w-7xl my-10 flex gap-10 mx-12">
      <div className="w-1/3 ">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold ">Advance Filter</h2>
          <a className="link link-primary text-lg mt-4 mr-4">Reset</a>
        </div>
        <div className="divider"></div>
        <div className="bg-base-100 p-6 rounded-xl shadow-sm">
          <div>
            <h2 className="text-xl font-bold mb-4">Industry</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>All</span>
                </div>
                <span className="badge badge-primary badge-sm">180</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Software</span>
                </div>
                <span className="badge badge-primary badge-sm">12</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Finance</span>
                </div>
                <span className="badge badge-primary badge-sm">23</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Recruiting</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Management</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Advertising</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>

            <div className="divider mt-6"></div>
          </div>
          <div>
            <div className="">
              <h2 className="text-xl font-bold">Salary Range</h2>

              {/* Slider value */}
              <div className="text-center text-primary font-semibold">
                ${salary}
              </div>

              <div className="flex items-center gap-4">
                {/* Slider */}
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="range range-primary range-sm w-3/4"
                />
                {/* Manual input (synced) */}
                <input
                  type=""
                  min="0"
                  max="500"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="input input-bordered w-1/4 mt-2"
                />
              </div>

              {/* Min / Max */}
              <div className="flex justify-between text-max-lg mt-2 text-gray-500 mb-8">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span>All</span>
                </div>
                <span className="badge badge-primary badge-sm">145</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$0k - $20k</span>
                </div>
                <span className="badge badge-primary badge-sm">56</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$20k - $40k</span>
                </div>
                <span className="badge badge-primary badge-sm">37</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$40k - $60k</span>
                </div>
                <span className="badge badge-primary badge-sm">75</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$60k - $80k</span>
                </div>
                <span className="badge badge-primary badge-sm">98</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$80k - $100k</span>
                </div>
                <span className="badge badge-primary badge-sm">14</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>$100k - $200k</span>
                </div>
                <span className="badge badge-primary badge-sm">25</span>
              </label>
            </div>

            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Popular Keyword</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Software</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Developer</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Web</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>

            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Position</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Senior</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Junior</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Fresher</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>
            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Experience Level</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Internship</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Entry Level</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Associate</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Mid-Level</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Director</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Executive</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>

            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Onsite/Remote</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>On-Site</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Remote</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Hybrid</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>
            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Job Posted</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>All</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>1 Day</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>7 Days</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>30 Days</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>
            <div className="divider mt-6"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Job Type</h2>

            <div className="space-y-4">
              {/* Item */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Full Time</span>
                </div>
                <span className="badge badge-primary badge-sm">43</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Part Time</span>
                </div>
                <span className="badge badge-primary badge-sm">65</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Remote Jobs</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Freelancer</span>
                </div>
                <span className="badge badge-primary badge-sm">76</span>
              </label>
            </div>
            <div className="divider mt-6"></div>
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <h2 className="text-4xl text-center font-bold ">All Jobs</h2>

        <div className="divider"></div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
