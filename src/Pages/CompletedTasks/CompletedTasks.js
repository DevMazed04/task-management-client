import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import Loading from '../Loading/Loading';
import CompletedTask from './CompletedTask';

const CompletedTasks = () => {
   // const [completedTasks, setCompletedTasks] = useState(null);

   const { data: tasks = [], isLoading, refetch, } = useQuery({
      queryKey: ['tasks'],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/tasks");
         const data = await res.json();
         return data;
      }
   });

   // const androidPhones = products.filter(product => product.category === "Android Phones");
   refetch();

   if (isLoading) {
      return <Loading></Loading>
   }


   return (
      <div className='text-center'>
         <h2 className='text-2xl mt-10'> Completed Tasks <span className='font-bold'>({tasks?.length})</span>
         </h2>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 w-[85%] mx-auto'>
            {
               tasks.map(completedTask =>
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