import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const {_id,title, description,location,jobType,category,applicationDeadline,company,company_logo,requirements,salaryRange} = useLoaderData()

  return (
    <div className="card glass w-96 mx-auto">
  <figure>
    <img src={company_logo} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    <Link to={`/jobApply/${_id}`}>
      <button className="btn btn-sm bg-blue-400 text-white">Apply Now</button> 
      </Link>
    </div>
  </div>
</div>
  );
};

export default JobDetails;
