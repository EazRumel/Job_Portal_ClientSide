import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/AuthInfo';

const AddJob = () => {
  const navigate = useNavigate();
  const {user} = useAuth()
  const handleAddJob =(event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries())
    console.log(initialData);
    const {max,min,currency,...newJob} = initialData;
    newJob.salaryRange = {max,min,currency};
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    fetch("http://localhost:3000/jobs",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newJob)
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Congratulations you have added your job!",
          icon: "success",
          draggable: true
        });
         navigate("/myPostedJobs")
      } 
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-lg ">
      <form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name="title" placeholder="Job-Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input name="location" type="text" placeholder="Job-Location" className="input input-bordered" required />
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select name="type" className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick a Job Type</option>
  <option>Full-Time</option>
  <option>Part-Time</option>
  <option>Remote-Job</option>
</select>
        </div>
        {/* job field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select name="field" className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick a Job Field</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Finance</option>
</select>
        </div>
        {/* salary and currency */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-end gap-4">
       
        <input  type="text" name="max" placeholder="Max" className="input input-bordered" required />
       
        <input  type="text" name="min" placeholder="Min" className="input input-bordered" required />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Currency</span>
          </label>
          <select name="currency" className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick a Currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>INR</option>
</select>
        </div>
        {/* job description */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Description" name="description" required></textarea>
        </div>
{/* company name */}
<div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input type="text" name="company" placeholder="Company-Name" className="input input-bordered" required />
        </div>
        {/* job requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="put your requirements in a new line" name="requirements" required></textarea>
        </div>
        {/* job responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="put your responsibilities in a new line" name="responsibilities" required></textarea>
        </div>
        {/* hr name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input defaultValue={user?.displayName} type="text" name="hr_name" placeholder="HR-Name" className="input input-bordered" required />
        </div>
        {/* hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input defaultValue={user?.email} type="email" name="hr_email" placeholder="HR-Email" className="input input-bordered" required />
        </div>
        {/* company logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name="logo" placeholder="Company Logo" className="input input-bordered" required />
        </div>
        {/* application deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm bg-blue-400 ">Add Job</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddJob;