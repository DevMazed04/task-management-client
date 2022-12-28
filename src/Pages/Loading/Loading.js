import React from 'react';

const Loading = () => {
   return (
      <>
         <div className="flex items-center justify-center h-[300px]">
            <div className="spinner-grow inline-block w-7 h-7 bg-cyan-500 rounded-full opacity-0 text-blue-600" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      </>
   );
};

export default Loading;