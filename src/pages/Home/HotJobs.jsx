import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>{jobs.length}</h2>
    </div>
  );
};

export default HotJobs;