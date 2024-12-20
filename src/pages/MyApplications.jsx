import { useEffect, useState } from "react";
import useAuth from "../hooks/AuthInfo";


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
     <h2>My Applications:{jobs.length}</h2>
    </div>
  );
};

export default MyApplications;