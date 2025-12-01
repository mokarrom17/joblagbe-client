import { motion } from "framer-motion";
import banner1 from "../../assets/Banner/banner1.png"
import banner2 from "../../assets/Banner/banner2.png"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={banner1}
            animate={{y:[0 , 50, 0]}}
            transition={{duration: 5, repeat: Infinity}}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <motion.img
            src={banner2}
            animate={{x:[90 , 150, 90]}}
            transition={{duration: 8, delay:5, repeat: Infinity}}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <div>
            <h1 className="text-5xl font-bold">
              The Easiest Way to Get Your New Job
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
