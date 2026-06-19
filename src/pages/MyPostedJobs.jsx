import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/AuthInfo';

const MyPostedJobs = () => {
  const [jobs,setJobs]= useState([]);
  const {user} = useAuth();
  useEffect(()=>{
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
    .then(response => response.json())
    .then(data =>setJobs(data))

  },[user.email])
  return (
    <div>
      <h2>Posted Jobs {jobs.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
     {
      jobs.map((job,index) => 
      
        <tr>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>{job.company}</td>
      </tr>
     )
     }
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyPostedJobs;