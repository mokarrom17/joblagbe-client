import React, { Suspense, useMemo } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationApi";

const MyApplications = () => {
  const { user } = useAuth();

  const email = user?.email

  const applicationsPromise = useMemo(() => {
    if (!email) return null;
    return myApplicationsPromise(email);
  }, [email]);

  if (!applicationsPromise) {
    return <p>Loading user info...</p>;
  }

  return (
    <div className="px-12 mt-12">
      <ApplicationStats />

      <Suspense fallback="Loading your applications...">
        <ApplicationList myApplicationsPromise={applicationsPromise} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
