import React from 'react';

const CompletedTask = ({ completedTask }) => {

   const { title, description, img } = completedTask;
   return (
      <div>
         <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div className="flex justify-end px-5 pt-5">
               <a href="/" title='Delete'>
                  <i className="fa-solid fa-trash-can text-red-500 font-light hover:font-semibold"></i>
               </a>
            </div>


            <div className="flex flex-col items-center pb-8">
               <img className="w-24 h-24 p-2 m-3 mt-0 rounded-full shadow-lg" src={img} alt={title} />
               <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
               <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>

               <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-yellow-400 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  // onClick={handleComplete(handleCompleteTask)}
                  >
                     Mark as Not Complete
                  </a>

                  {/* <a href="/" title='Add to Starred'
                     className="inline-flex items-center px-4 py-2 text-md font-semibold text-center text-yellow-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">

                     <i className="fa-regular fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </a> */}
               </div>

            </div>
         </div>

      </div>
   );
};

export default CompletedTask;