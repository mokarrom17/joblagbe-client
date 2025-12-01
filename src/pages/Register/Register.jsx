import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    
    const password = form.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center gap-10">

        {/* LEFT - LOTTIE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            className="w-full max-w-md"
            animationData={registerLottie}
            loop={true}
          />
        </div>

        {/* RIGHT - FORM */}
        <div className="w-full lg:w-1/2 flex justify-center">
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
            <div className="mb-6">
              <SocialLogin />
            </div>

            <div className="divider text-gray-400">Or continue with</div>

            {/* FORM BOX */}
            <div className="card bg-base-100 shadow-xl mt-4">
              <div className="card-body">

                <form onSubmit={handleRegister} className="space-y-4">

                  <div>
                    <label className="label font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full"
                      placeholder="Steven Job"
                      required
                    />
                  </div>

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
                    <label className="label font-medium">Username *</label>
                    <input
                      type="text"
                      name="username"
                      className="input input-bordered w-full"
                      placeholder="stevenjob"
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

                  <div>
                    <label className="label font-medium">Re-Password *</label>
                    <input
                      type="password"
                      name="confirm"
                      className="input input-bordered w-full"
                      placeholder="************"
                      required
                    />
                  </div>

                  {/* Terms */}
                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="text-sm">Agree our terms and policy</span>
                  </label>

                  <button className="btn btn-neutral w-full mt-3">
                    Submit & Register
                  </button>

                </form>

              </div>
            </div>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a className="text-blue-600 font-semibold cursor-pointer">Sign in</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
