import { useContext, useEffect, useState } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const MyApplications = () => {
  const { user, loading } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;
    fetch(`http://localhost:3000/applications?email=${user.email}`, {
      // credentials: "include",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        setDataLoading(false);
      });
  }, [user?.email, user?.accessToken]);

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
