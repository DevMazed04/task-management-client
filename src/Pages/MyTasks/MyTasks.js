import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import Loading from '../Loading/Loading';
import MyTask from './MyTask';

const MyTasks = () => {
   // const [myTasks, setMyTasks] = useState(null);

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
         <h2 className='text-[20px] mt-10 font-semibold'> My All Tasks <span className='font-semibold'>({tasks?.length})</span>
         </h2>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 w-[85%] mx-auto'>
            {
               tasks.map(myTask =>
                  <MyTask
                     key={myTask._id}
                     myTask={myTask}>
                  </MyTask>
               )
            }
         </div>

      </div>
   )
}

export default MyTasks