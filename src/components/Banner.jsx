import { easeInOut } from "motion";
import { motion } from "motion/react"
import team1 from "../assets/team/team1.jpg"
import team2 from "../assets/team/team2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1 flex-cols-1">
    <motion.img
      src={team1}
      animate={{y:[50,0,50]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 border-blue-400 border-b-4 border-l-4 rounded-t-[40px] rounded-br-[40px] shadow-2xl" />
    <motion.img
      src={team2}
      animate={{x:[100,150,100]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]
      border-l-4 border-b-4 border-blue-400 shadow-2xl" />
    </div>
    <div className="flex-1">
      <motion.h1
      animate={{x:50}}
      transition={{delay:1,duration:2, ease:easeInOut,repeat:Infinity}}
      
       className="text-5xl font-bold text-blue-400">Latest job available.Get  
       <motion.span
       transition={{duration:1.5, repeat:Infinity}}
       animate={{color:["#33ffcb","#33fff1"]}}
       > Job</motion.span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-sm text-white bg-blue-400">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;