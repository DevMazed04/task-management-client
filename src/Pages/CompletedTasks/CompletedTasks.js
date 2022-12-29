import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

import CompletedTask from './CompletedTask';

const CompletedTasks = () => {

   const {
      data: completedTasks = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["completedTasks"],
      queryFn: async () => {
         const res = await fetch(
            "http://localhost:5000/completed-tasks"
         );
         const data = await res.json();
         return data;
      },
   });


   // const handleDeleteTask = (completedTask) => {
   //    fetch(
   //       `https://recycle-hut-server.vercel.app/reported-items/${completedTask._id}`,
   //       {
   //          method: "DELETE",
   //       }
   //    )
   //       .then((res) => res.json())
   //       .then((data) => {
   //          if (data.deletedCount > 0) {
   //             refetch();
   //             toast.success(
   //                `${completedTask.title} is deleted from Completed Task`
   //             );
   //          }
   //       });
   // };

   // if (isLoading) {
   //    return <Loading></Loading>;
   // }

   // const androidPhones = products.filter(product => product.category === "Android Phones");

   return (
      <div className='text-center'>
         <h2 className='text-2xl mt-10'> Completed Tasks <span className='font-bold'>({completedTasks?.length})</span>
         </h2>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 w-[85%] mx-auto'>
            {
               completedTasks.map(completedTask =>
                  <CompletedTask
                     key={completedTask._id}
                     completedTask={completedTask}>
                  </CompletedTask>
               )
            }
         </div>

      </div>
   )
}

export default CompletedTasks