import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    fetch(`http://localhost:3000/jobsByEmailAddress?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(Array.isArray(data) ? data : []);
        setLoading(false); // ✅ STOP LOADING
      })
      .catch((err) => {
        console.error(err);
        setJobs([]);
        setLoading(false); // ✅ STOP LOADING EVEN ON ERROR
      });
  }, [user?.email, user?.accessToken]);

  if (loading) {
    return <p className="text-center mt-10">Loading posted jobs...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Posted Jobs: {jobs.length}</h2>

      <MyPostedJobsList jobs={jobs} />
    </div>
  );
};

export default MyPostedJobs;
