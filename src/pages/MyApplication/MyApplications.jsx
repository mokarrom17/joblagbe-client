import { useContext, useEffect, useState } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import useUserApplicationApi from "../../CustomHooks/useApplicationApi";

const MyApplications = () => {
  const { user, loading } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { getMyApplications } = useUserApplicationApi();

  console.log("token in the context", user.accessToken);

  useEffect(() => {
    if (loading || !user?.email) return;

    const loadApplications = async () => {
      try {
        const data = await getMyApplications(user.email);
        setApplications(data);
      } catch (error) {
        console.error("Failed to load applications:", error.message);
      } finally {
        setDataLoading(false);
      }
    };

    loadApplications();
  }, [loading, user?.email, getMyApplications]);

  if (loading || dataLoading) {
    return <p className="text-center mt-10">Loading applications...</p>;
  }

  return (
    <div className="px-12 mt-12">
      <ApplicationStats />
      <ApplicationList applications={applications} />
    </div>
  );
};

export default MyApplications;
