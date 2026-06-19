import Lottie from "react-lottie";
import animateLottie from "../assets/animation/Animation - 1734548076509.json"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../shared/SocialLogin";


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animateLottie,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-400">Sign Up now!</h1>
    <Lottie options={lottieOptions}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 text-white">Sign Up</button>
        </div>
      </form>
      <div className="mb-4 ml-4">
      <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;