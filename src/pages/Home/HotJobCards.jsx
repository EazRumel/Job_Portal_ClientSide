import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HotJobCards = ({job}) => {
  const {_id,title, description,location,jobType,category,applicationDeadline,company,company_logo,requirements,salaryRange} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <div className="flex mt-4 items-center">
    <figure>
      <img
        className="w-12"
        src={company_logo}
        alt="Shoes" />
    </figure>
    <div>
      <h3>{company}</h3>
      <p className="flex gap-1 items-center"><CiLocationOn/>{location}</p>
    </div>
    </div>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="flex">
         <h3 className="flex gap-1 flex-wrap ">Skills:
         {
          requirements.map(skill => <p className="border rounded-lg text-center px-2 hover:text-blue-900 hover:bg-blue-400">{skill}</p>)
         }</h3>
      </div>
      <div className="card-actions justify-end">
      <p>Salary:{salaryRange.max}-{salaryRange.min}{salaryRange.currency}</p>
        <Link to={`/jobs/${_id}`}>
        <button className="btn btn-sm text-white hover:bg- bg-blue-400">Apply</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default HotJobCards;