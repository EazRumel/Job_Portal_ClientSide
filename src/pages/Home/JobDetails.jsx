import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData()
  console.log(job)
  return (
    <div>
      <img src={job.company_logo} alt="" />
      <button className="btn btn-sm bg-blue-400">Apply Now</button>
    </div>
  );
};

export default JobDetails;