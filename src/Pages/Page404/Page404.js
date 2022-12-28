import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {

   return (
      <div>
         <div className="notfound flex flex-col justify-center items-center text-yellow-400">
            <div className="notfound-404">
               <h1 className='text-red-600 font-bold'>404</h1>
            </div>
            <h2 className='text-[22px] font-semibold'>Oops! Page Not Found</h2>
            <div>
               <Link to="/">
                  <button type="button" className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go To Home</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Page404;