import { useEffect, useState } from "react";
import Banner from "./Banner";
import Category from "./Category";
import HotJobs from "./HotJobs";
import Newsletter from "./Newsletter";
import Blog from "./Blog";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load jobs", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner />
      <Category />

      {loading ? (
        <p className="text-center my-10">Loading jobs...</p>
      ) : (
        <HotJobs jobs={jobs} />
      )}
      <Blog></Blog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
