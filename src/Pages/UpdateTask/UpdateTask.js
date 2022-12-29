import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateTask = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const storedTask = useLoaderData();
  console.log("main Task:", storedTask);

  const [task, setTask] = useState(storedTask);

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleUpdateTask = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
        }
        const task = {
          // userEmail: user.email,
          img: imgData.data?.url,
          title: data.name,
          description: data.description,
        };
        console.log("task:", task);

        fetch(`http://localhost:5000/task/${storedTask._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(task),
        })
          ///////////
          .then((res) => res.json())
          .then((data) => {
            console.log("response data", data);
            setTask(task);

            if (data.modifiedCount > 0) {
              toast.success(`${task.title} task is updated successfully`);
              navigate("/my-tasks");
            }
          });
        //////////
      });
  };

  return (
    <div className="lg:w-[33%] mx-auto p-10">
      <h2 className="text-[20px] mb-5 text-center font-semibold">
        Update Task
      </h2>

      <form
        onSubmit={handleSubmit(handleUpdateTask)}
        className="border bg-base-100 rounded-xl p-6 shadow-lg"
      >
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold inline-block mb-2">
              Update Title
            </span>
          </label>
          <input
            type="text"
            name="title"
            {...register("name")}
            className="input input-bordered w-full rounded-lg shadow-sm border border-slate-400"
            defaultValue={storedTask.title}
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold inline-block mb-2">
              Update Photo
            </span>
          </label>

          <input
            type="file"
            name="image"
            {...register("image")}
            className="input input-bordered w-full p-0 border border-slate-400 rounded-lg"
            // defaultValue={storedTask.img}
            required />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="inline-block label-text font-semibold mb-2">
              Update Details
            </span>
          </label>

          <textarea
            name="description"
            {...register("description")}
            className="textarea w-full rounded-lg shadow-sm border border-slate-400"
            defaultValue={storedTask.description}
          ></textarea>
        </div>

        <button
          type="submit"
          value="Update"
          className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1 uppercase"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
