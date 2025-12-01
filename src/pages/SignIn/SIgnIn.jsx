import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import signINLottie from "../../assets/lottie/SingnIn.json";
import { Result } from "postcss";
import SocialLogin from "../shared/SocialLogin";
import { Link } from "react-router";

const SIgnIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // Sign In User
    signInUser(email, password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error)
    })
  };
  return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
         <div className="flex flex-col lg:flex-row-reverse w-full max-w-7xl items-center gap-10">
           {/* LEFT - LOTTIE */}
           <div className="w-full lg:w-1/3 flex justify-center">
             <Lottie
               className="w-full max-w-md"
               animationData={signINLottie}
               loop={true}
             />
           </div>

           {/* RIGHT - FORM */}
           <div className="w-full lg:w-2/3 flex justify-center">
             <div className="w-full max-w-md">
               {/* Heading */}
               <div className="text-center mb-6">
                 <a className="text-sm text-blue-600 font-semibold cursor-pointer">
                   Register
                 </a>
                 <h1 className="text-3xl font-bold mt-2">Start for free Today</h1>
                 <p className="text-gray-500 mt-2">
                   Access to all features. No credit card required.
                 </p>
               </div>

               {/* Social Login */}
               <div className="mb-6 flex justify-center">
                 <SocialLogin />
               </div>
               <div className="divider text-gray-400">Or continue with</div>
               {/* FORM BOX */}
               <div className="card bg-base-100 shadow-xl mt-4">
                 <div className="card-body">
                   <form onSubmit={handleSignIn} className="space-y-4">
                     

                     <div>
                       <label className="label font-medium">Email *</label>
                       <input
                         type="email"
                         name="email"
                         className="input input-bordered w-full"
                         placeholder="stevenjob@gmail.com"
                         required
                       />
                     </div>


                     <div>
                       <label className="label font-medium">Password *</label>
                       <input
                         type="password"
                         name="password"
                         className="input input-bordered w-full"
                         placeholder="************"
                         required
                       />
                     </div>

                     <button className="btn bg-[#002246] w-full mt-3 hover:bg-[#426aff] text-white transition-colors">
                       Submit & Sign In
                     </button>
                   </form>
                 </div>
               </div>

               <p className="text-center text-sm mt-4 mb-4">
                  Don’t have an account?{" "}
                 <Link
                   to="/register"
                   className="text-blue-600 font-semibold cursor-pointer"
                 >
                   Register
                 </Link>
               </p>
             </div>
           </div>
         </div>
       </div>
  );
};

export default SIgnIn;
