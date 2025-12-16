import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyPostedJobsList from './MyPostedJobsList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense>
                <MyPostedJobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;