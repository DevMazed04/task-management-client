import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="containe ml-3 lg:mx-5 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-[25px] mr-2 font-bold hidden lg:block">
              <i className="fa-solid fa-list-check"></i>
            </span>

            <span className="self-center text-[18px] font-semibold whitespace-nowrap dark:text-white">
              Task Management
            </span>
          </Link>

          <div className="flex lg:order-2">
            {user?.uid ? (
              <>
                <button
                  type="submit"
                  value="Submit"
                  className="w-full hidden lg:block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-xl text-sm px-4 py-2 text-center mr-2 mb-2 hover:rounded-2xl"
                  onClick={handlelogOut}
                >
                  {" "}
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="submit"
                    value="Submit"
                    className="hidden lg:block w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-xl text-sm px-4 py-2 text-center mr-2 mb-2 hover:rounded-2xl"
                  >
                    {" "}
                    Log In
                  </button>
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {/* <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link
                  to="/add-task"
                  className="text-[16px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  to="/my-tasks"
                  className="text-[16px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Tasks
                </Link>
              </li>
              <li>
                <Link
                  to="/completed-tasks"
                  className="text-[16px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Completed Tasks
                </Link>
              </li>

              <li>
                <Link
                  to="/starred-tasks"
                  className="text-[16px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Starred Tasks
                </Link>
              </li>

              {user?.uid ? (
                <>
                  <button
                    type="submit"
                    value="Submit"
                    className="lg:hidden text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-xl text-sm px-4 py-2 text-center mr-2 my-2.5 hover:rounded-2xl w-[40%] md:w-[15%]"
                    onClick={handlelogOut}
                  >
                    {" "}
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      type="submit"
                      value="Submit"
                      className="lg:hidden text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-xl text-sm px-4 py-2 text-center mr-2 my-2.5 hover:rounded-2xl w-[40%] md:w-[15%]"
                    >
                      {" "}
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
