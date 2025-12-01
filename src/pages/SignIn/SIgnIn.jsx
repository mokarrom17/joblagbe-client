import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import signINLottie from "../../assets/lottie/SingnIn.json";
import { Result } from "postcss";

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
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse w-full max-w-6xl items-center">
        {/* Lottie Animation on the left */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-4">
          <Lottie
            className="w-full h-full max-h-[80vh]"
            animationData={signINLottie}
            loop={true}
          />
        </div>

        {/* Register Form in the middle/right */}
        <div className="w-full lg:w-2/3 flex items-center justify-end p-4">
          <div>
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-center mb-2">
                Welcome Back
              </h1>
              <p className="text-4xl font-bold mb-2">Member Login</p>
              <h1 className="text-md ">
                Access to all features. No credit card required.
              </h1>
            </div>
            <div className="card bg-base-100 shadow-2xl w-full max-w-sm">
              <div className="card-body">
                <form onSubmit={handleSignIn}>
                  <fieldset className="space-y-4">
                    <div>
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label className="label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full"
                        placeholder="Password"
                      />
                    </div>

                    <button className="btn btn-neutral w-full mt-4">
                      SignIn
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
