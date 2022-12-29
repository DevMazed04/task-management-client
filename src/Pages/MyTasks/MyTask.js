import React from 'react';
import toast from 'react-hot-toast';

const MyTask = ({ myTask }) => {
  const { title, description, img } = myTask;

  const handleCompletedTask = (myTask) => {
    saveCompletedTaskToDb(myTask);
  }

  /////////////////////////
  const saveCompletedTaskToDb = (myTask) => {
    const { title, description, img } = myTask;

    const completedTask = {
      title,
      description,
      img,
    };

    fetch("http://localhost:5000/completed-tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save completed task", data);

        if (data.acknowledged) {
          toast.success(`${myTask.title} is marked as a Completed Task`);
        }
        else {
          toast.error(data.message);
        }
      });
  };
  //////////////////////////

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        <div className="flex justify-end px-5 pt-5">
          <a href="/" title='Update' >
            <i className="fa-solid fa-pen-to-square font-light text-blue-500 mx-3 hover:font-semibold"></i>
          </a>
          <a href="/" title='Delete'>
            <i className="fa-solid fa-trash-can text-red-500 font-light hover:font-semibold"></i>
          </a>
        </div>


        <div className="flex flex-col items-center pb-8">
          <img className="w-24 h-24 p-2 m-3 mt-0 rounded-full shadow-lg" src={img} alt={title} />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>

          <div className="flex mt-4 space-x-3 md:mt-6">

            <label
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              onClick={() => handleCompletedTask(myTask)}>
              Mark as Complete
            </label>

            <label
              title='Add to Starred'
              className="inline-flex items-center px-4 py-2 text-md font-semibold text-center text-yellow-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">

              <i className="fa-regular fa-star"></i>
              {/* <i className="fa-solid fa-star"></i> */}
            </label>
          </div>

        </div>
      </div>

    </div >
  );
};

export default MyTask;