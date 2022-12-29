import React from 'react';

const MyTask = ({ myTask }) => {

  const { title, description, img } = myTask;
  return (
    <div>
      {/* <a href="" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-[100px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt={title} />

        <div className="flex flex-col justify-between p-4 leading-norma">
          <h5 className="">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a> */}


      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        <div className="flex justify-end px-5 pt-5">
          <a href="/" title='Update' >
            <i class="fa-solid fa-pen-to-square font-light text-blue-500 mx-3 hover:font-semibold"></i>
          </a>

          <a href="/" title='Delete'>
            <i class="fa-solid fa-trash-can text-red-500 font-light hover:font-semibold"></i>
          </a>
        </div>


        <div className="flex flex-col items-center pb-8">
          <img className="w-24 h-24 p-2 m-3 rounded-full shadow-lg" src={img} alt={title} />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>

          <div className="flex mt-4 space-x-3 md:mt-6">


            <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              Mark as Complete
            </a>

            <a href="/" title='Add to Starred'
              className="inline-flex items-center px-4 py-2 text-md font-semibold text-center text-yellow-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">

              <i class="fa-regular fa-star"></i>
              {/* <i class="fa-solid fa-star"></i> */}
            </a>

            {/* <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Add To Starred</a> */}
          </div>

        </div>
      </div>

    </div>
  );
};

export default MyTask;