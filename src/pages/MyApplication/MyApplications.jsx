import { useContext, useEffect, useState } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const MyApplications = () => {
  const { user, loading } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  console.log("token in the context", user.accessToken);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user.email) {
        setDataLoading(false);
        return;
      }
      try {
        const token = await user.getIdToken();

        const res = await fetch(
          `http://localhost:3000/applications?email=${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Unauthorized of failed request");
        }

        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setDataLoading(false);
      }
    };
    if (!loading) {
      fetchApplications();
    }
  }, [user, loading]);

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
