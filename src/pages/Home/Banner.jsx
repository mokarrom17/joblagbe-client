import { motion as Motion } from "framer-motion";
import banner1 from "../../assets/Banner/banner1.png";
import banner2 from "../../assets/Banner/banner2.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <Motion.img
            src={banner1}
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <Motion.img
            src={banner2}
            animate={{ x: [90, 150, 90] }}
            transition={{ duration: 8, delay: 5, repeat: Infinity }}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <div>
            <h1 className="text-5xl font-bold px-8">
              The <span className="text-[#426aff]">Easiest Way</span> <br /> to
              Get Your New Job
            </h1>
            <p className="py-6 px-8 text-gray-600">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <div className="px-8 flex flex-col md:flex-row gap-4">
              <select
                defaultValue="Pick a Framework"
                className="select select-info"
              >
                <option >Industry</option>
                <option>Software</option>
                <option>Finance</option>
                <option>Management</option>
                <option>Advertising</option>
                <option>Development</option>

              </select>
              <select
                defaultValue="Pick a Framework"
                className="select select-info"
              >
                <option disabled={true}></option>
                <option>React</option>
                <option>Vue</option>
                <option>Angular</option>
              </select>
              <input type="text" placeholder="Your keyword" className="input input-info" />
              <button className="btn btn-primary hover:bg-[#002246]"><IoSearch />Search</button>
            </div>
          </div>
          <div className="mt-10 px-8 flex flex-wrap gap-2 text-[#4F5E64]">
            <h1>Popular Searches:</h1>
            <Link className="underline"><ul>Designer</ul></Link>
            <Link className="underline"><ul>Web</ul></Link>
            <Link className="underline"><ul>IOS</ul></Link>
            <Link className="underline"><ul>Developer</ul></Link>
            <Link className="underline"><ul>PHP</ul></Link>
            <Link className="underline"><ul>Engineering</ul></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
