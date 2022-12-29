import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
// import { AuthContext } from '../../../contexts/AuthProvider';


const AddTask = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   // const { user } = useContext(AuthContext);
   const imageHostKey = process.env.REACT_APP_imgbb_key;
   console.log('imageHostKey:', imageHostKey)
   const navigate = useNavigate();

   // const postedDate = new Date().toLocaleDateString();
   // const postedTime = new Date().toLocaleTimeString();

   // const { data: categories, isLoading } = useQuery({
   //    queryKey: ['category'],
   //    queryFn: async () => {
   //       const res = await fetch('https://recycle-hut-server.vercel.app/categories');
   //       const data = await res.json();
   //       return data;
   //    }
   // })

   const handleAddTask = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);

      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgData => {
            if (imgData.success) {
               console.log(imgData.data.url);
            }
            const tasks = {
               // postedDate,
               // postedTime,
               // userEmail: user.email,
               img: imgData.data.url,
               title: data.name,
               description: data.description,
            }
            console.log('task:', tasks)

            fetch('http://localhost:5000/tasks', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(tasks)
            })
               .then(res => res.json())
               .then(result => {
                  console.log(result);
                  toast.success(`${data.name} task is added successfully`);
                  navigate('/my-tasks')
               })
         })
   }

   // if (isLoading) {
   //    return <Loading></Loading>
   // }

   return (
      <div className='lg:w-[50%] mx-auto p-8'>
         <h2 className="text-[20px] mb-5 text-center font-semibold">Add A Task</h2>

         <form onSubmit={handleSubmit(handleAddTask)} className="border bg-base-100 rounded-xl p-6">

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Task Title</span></label>
               <input type="text" {...register("name", {
                  required: "Name is Required"
               })} className="input input-bordered w-full" />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Photo</span></label>
               <input type="file" {...register("image", {
                  required: "Photo is Required"
               })} className="input input-bordered w-full p-2" />
               {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            {/* <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Category</span></label>
               <select
                  {...register('category')}
                  className="select input-bordered w-full font-normal">
                  {
                     categories.map(category => <option
                        key={category._id}
                        value={category.name}
                     >{category.name}</option>)
                  }
               </select>
            </div> */}

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Description</span></label>
               <input type="text" {...register("description", {
                  required: "Description is Required"
               })} className="input input-bordered w-full" />
               {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>

            {/* <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Seller Email</span></label>
               <input type="email" defaultValue={user?.email} readOnly {...register("userEmail", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.userEmail && <p className='text-red-500'>{errors.userEmail.message}</p>}
            </div> */}

            <input className='btn btn-accent bg-cyan-500 text-white w-full mt-4' value="Submit" type="submit" />
         </form>
      </div>
   );
};

export default AddTask;