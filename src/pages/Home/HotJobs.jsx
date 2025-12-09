import React, { use } from 'react';
import JobCard from '../shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
            <div className='text-center my-12'>
                <h2 className='text-4xl font-bold '>Jobs of the day</h2>
            <p className='text-[#66789C] text-lg font-medium'>Search and connect with the right candidates faster.</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-12'>
             {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
           </div>
        </div>
    );
};

export default HotJobs;