import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";
import useJobApi from "../../CustomHooks/useJobApi";

const MyPostedJobs = () => {
  const { user, loading: authLoading } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { getMyJobs } = useJobApi();

  useEffect(() => {
    if (authLoading || !user?.email) return;

    const loadJobs = async () => {
      try {
        const data = await getMyJobs(user.email);
        setJobs(data);
      } catch (error) {
        console.error("Failed to load posted jobs:", error.message);
      } finally {
        setDataLoading(false);
      }
    };
    loadJobs();
  }, [authLoading, user?.email, getMyJobs]);

  if (authLoading || dataLoading) {
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
