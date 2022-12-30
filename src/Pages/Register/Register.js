import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    setSignupError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Registration Successful");

        const userInfo = {
          displayName: name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(name, email);
          })
          .catch((error) => console.error(error));
      })

      .catch((error) => {
        console.error(error);
        setSignupError(error.message);
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
    <div className="mb-16">
      <div className="flex flex-col h-[550px] justify-center items-center">
        <h3 className="text-[21px] text-center font-semibold text-cyan-600 mt-6">
          Register Here
        </h3>
        <div className="shadow-xl p-5 lg:p-6 rounded-2xl border mt-5">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-normal inline-block mb-2">
                  Name
                </span>
              </label>

              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold text-start mt-2">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-normal inline-block mb-2">
                  Email
                </span>
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email is Required",
                })}
                className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
              />
              {errors.email && (
                <p className="text-red-500 font-semibold text-start mt-2">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text  font-normal inline-block mb-2">
                  Password
                </span>
              </label>

              <input
                type="password"
                className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be six character or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 font-semibold text-start mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div>
              {signupError && (
                <p className="text-red-500 font-semibold">{signupError}</p>
              )}
            </div>

            <div className="form-control mt-[23px]">
              <button
                value="register"
                className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 uppercase"
              >
                Register
              </button>

              <label className="label">
                <p className="text-center">
                  <span className="text-[13px] text-center mr-2">
                    Already have an account?
                  </span>
                  <Link to="/login">
                    <span className="text-[13px] text-center text-primary">
                      Please{" "}
                      <span className="text-cyan-500 text-[13.5px] font-semibold hover:font-bold hover:text-[14px]">
                        Log in
                      </span>
                    </span>
                  </Link>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
