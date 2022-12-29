import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';


const AddTask = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   // const { user } = useContext(AuthContext);
   const imageHostKey = process.env.REACT_APP_imgbb_key;
   const navigate = useNavigate();

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
            const task = {
               // userEmail: user.email,
               img: imgData.data.url,
               title: data.name,
               description: data.description,
            }
            console.log('task:', task)

            fetch('http://localhost:5000/tasks', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(task)
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
      <div className='lg:w-[33%] mx-auto p-10'>
         <h2 className="text-[20px] mb-5 text-center font-semibold">Add A Task</h2>

         <form onSubmit={handleSubmit(handleAddTask)} className="border bg-base-100 rounded-xl p-6 shadow-lg">

            <div className="form-control w-full mb-4">
               <label className="label"> <span className="label-text font-semibold inline-block mb-2">Add Title</span></label>

               <input type="text"
                  {...register("name", {
                     required: "Name is Required"
                  })}
                  className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400" />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full mb-4">
               <label className="label"> <span className="label-text font-semibold inline-block mb-2">Add Photo</span></label>

               <input type="file"
                  {...register("image", {
                     required: "Photo is Required"
                  })}
                  className="input input-bordered w-full p-0 border border-slate-400 rounded-lg" />
               {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            <div className="form-control w-full mb-5">
               <label className="label"> <span className="inline-block label-text font-semibold mb-2">Add Details</span></label>
               <input type="text" {...register("description", {
                  required: "Description is Required"
               })}
                  className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400" />
               {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>

            {/* <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Seller Email</span></label>
               <input type="email" defaultValue={user?.email} readOnly {...register("userEmail", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.userEmail && <p className='text-red-500'>{errors.userEmail.message}</p>}
            </div> */}

            <button type="submit" value="Submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase">Submit</button>
         </form>
      </div>
   );
};

export default AddTask;