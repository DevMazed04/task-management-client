import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import MyTask from "../../Pages/MyTask/MyTask";
import Page404 from "../../Pages/Page404/Page404";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <AddTask></AddTask>,
         },
         {
            path: "/add-task",
            element: <AddTask></AddTask>,
         },
         {
            path: "/my-task",
            element: <MyTask></MyTask>,
         },
         {
            path: "/completed-task",
            element: <CompletedTask></CompletedTask>,
         },
      ],
   },

   {
      path: '*',
      element: <Page404></Page404>
   }
]);