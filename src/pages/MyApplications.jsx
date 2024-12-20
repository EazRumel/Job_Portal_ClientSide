import { useEffect, useState } from "react";
import useAuth from "../hooks/AuthInfo";
import { MdDelete } from "react-icons/md";
import { div } from "motion/react-client";


const MyApplications = () => {
  const {user} = useAuth();
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/job-applications?email=${user.email}`)
    .then(response => response.json())
    .then(data=>{
    setJobs(data)
    })
  },[user.email])
  return (
   <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job => <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}/>
              </div>
            </div>
            <div>
              <div className="font-bold">{job.company}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          {job.title}
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{job.category}</td>
        <th>
          <button className="btn btn-ghost text-blue-400 text-2xl btn-xs"><MdDelete /></button>
        </th>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
   </div>
  );
};

export default MyApplications;
