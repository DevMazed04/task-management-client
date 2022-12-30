import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import MyTasks from "../../Pages/MyTasks/MyTasks";
import CompletedTasks from "../../Pages/CompletedTasks/CompletedTasks";
import StarredTasks from "../../Pages/StarredTasks/StarredTasks";
import Page404 from "../../Pages/Page404/Page404";
import UpdateTask from "../../Pages/UpdateTask/UpdateTask";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CompletedTask from "../../Pages/CompletedTasks/CompletedTask";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element:
               <PrivateRoute>
                  <AddTask></AddTask>
               </PrivateRoute>,
         },
         {
            path: "/add-task",
            element:
               <PrivateRoute>
                  <AddTask></AddTask>
               </PrivateRoute>,
         },
         {
            path: "/my-tasks",
            element:
               <PrivateRoute>
                  <MyTasks></MyTasks>
               </PrivateRoute>,
         },
         {
            path: "/completed-tasks",
            element:
               <PrivateRoute>
                  <CompletedTask></CompletedTask>
               </PrivateRoute>,
         },
         // {
         //    path: "/starred-tasks",
         //    element:
         //       <PrivateRoute>
         //          <StarredTasks></StarredTasks>
         //       </PrivateRoute>,
         // },
         {
            path: '/update-task/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`),
            element:
               <UpdateTask></UpdateTask>
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         }
      ],
   },

   {
      path: '*',
      element: <Page404></Page404>
   }
]);