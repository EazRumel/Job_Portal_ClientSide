import React, { useEffect, useState } from 'react';
import HotJobCards from './HotJobCards';

const HotJobs = () => {
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
  fetch("http://localhost:3000/jobs")
  .then(response => response.json())
  .then((data =>{
    setJobs(data)
  }
  ))
  } ,[])
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-2 mt-10">
     {
      jobs.map(job => <HotJobCards key={job._id} job={job}></HotJobCards>)
     }
    </div>
  );
};

export default HotJobs;