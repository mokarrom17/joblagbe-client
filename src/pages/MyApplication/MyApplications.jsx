import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationApi";

const MyApplications = () => {
    const {user} = useAuth();
  return (
    <div>
     <ApplicationStats></ApplicationStats>
     <Suspense fallback={"Loading your Applications..."}>
     <ApplicationList  myApplicationsPromise={myApplicationsPromise(user.email)}>
     </ApplicationList>
     </Suspense>
    </div>
  );
};

export default MyApplications;
