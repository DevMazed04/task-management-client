import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, googleSignIn, updateUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    setLoginError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const name = user.displayName;
        const email = user.email;

        const userInfo = {
          name: name,
          email: email,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(name, email);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        navigate("/");
      });
  };

  return (
    <div className=" flex flex-col h-[550px] justify-center items-center">
      <h3 className="text-[21px] text-center font-semibold text-cyan-600 mt-6">
        Login Here
      </h3>
      <div className="shadow-xl p-5 lg:p-6 rounded-2xl border mt-5">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text font-normal inline-block mb-2">
                Email
              </span>
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Enter your email",
              })}
              className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
            />
            {errors.email && (
              <p className="text-red-500 font-semibold text-start mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text  font-normal inline-block mb-2">
                Password
              </span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
              {...register("password", {
                required: "Enter your password",
              })}
            />
            {errors.password && (
              <p className="text-red-500 font-semibold text-start mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="form-control mt-1">
            <label className="label">
              <span className="text-xs">Forget Password?</span>
            </label>
          </div>
          <div>
            {loginError && (
              <p className="text-red-500 font-semibold">{loginError}</p>
            )}
          </div>

          <div className="form-control mt-3">
            <button
              value="login"
              className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 uppercase"
            >
              Login
            </button>
          </div>
          <div className="divider text-center text-[14px] font-semibold my-[6px]">
            OR
          </div>

          <div className="form-control">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full uppercase text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center mr-2 mb-2 border"
            >
              <svg
                className="mr-3 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <span> Log In with Google</span>
            </button>
          </div>

          <label className="label">
            <p className="text-center">
              <span className="text-[13px] text-center mr-2">
                Don't have an account?
              </span>
              <Link to="/register">
                <span className="text-[13px] text-center text-primary">
                  Please{" "}
                  <span className="text-cyan-500 text-[13.5px] font-semibold hover:font-bold hover:text-[14px]">
                    Register
                  </span>
                </span>
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
