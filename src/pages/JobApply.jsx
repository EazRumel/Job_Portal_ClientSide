import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/AuthInfo";
import AuthInfo from "../hooks/AuthInfo";
import Swal from "sweetalert2";

const JobApply = () => {
  const {id} = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();
  console.log(id,user)
  const submitJobApply = (event) =>{
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn,github,resume);
    const jobApplicant = {
        job_id:id,
        applicant_email:user.email,
        linkedIn,
        github,
        resume
    }
    fetch("http://localhost:3000/job-applications",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(jobApplicant)
    })
    .then(response => response.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: "Congratulations you have applied!",
          icon: "success",
          draggable: true
        });
         navigate("/myApplications")
      } 
    })
  }
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-2xl">
    <h2 className="text-center font-extrabold text-blue-400 text-2xl mt-3">Apply Now</h2>
    <hr className="mt-3" />
     <div>
     <form onSubmit={submitJobApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input name="linkedIn" type="url" placeholder="linkedIn url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub URL</span>
          </label>
          <input name="github" type="url" placeholder="github url" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input name="resume" type="url" placeholder="resume url" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm bg-blue-400 text-white">Apply</button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default JobApply;
