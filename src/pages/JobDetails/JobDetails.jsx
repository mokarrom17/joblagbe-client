import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    
    return (
        <div>
            <img src={job.banner}  />
            <h1>{job.title}</h1>
            <p>{job.description}</p>
        </div>
    );
};

export default JobDetails;