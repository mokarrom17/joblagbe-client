import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/jobsByEmailAddress?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Jobs API response:", data);

        setJobs(Array.isArray(data) ? data : []);
        setLoading(false); // ✅ STOP LOADING
      })
      .catch((err) => {
        console.error(err);
        setJobs([]);
        setLoading(false); // ✅ STOP LOADING EVEN ON ERROR
      });
  }, [user?.email]);

  if (loading) {
    return <p className="text-center mt-10">Loading posted jobs...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        My Posted Jobs: {jobs.length}
      </h2>

      <MyPostedJobsList jobs={jobs} />
    </div>
  );
};

export default MyPostedJobs;
