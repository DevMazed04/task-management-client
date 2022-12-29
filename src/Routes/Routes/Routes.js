import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import MyTasks from "../../Pages/MyTasks/MyTasks";
import CompletedTasks from "../../Pages/CompletedTasks/CompletedTasks";
import StarredTasks from "../../Pages/StarredTasks/StarredTasks";
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
            path: "/my-tasks",
            element: <MyTasks></MyTasks>,
         },
         {
            path: "/completed-tasks",
            element: <CompletedTasks></CompletedTasks>,
         },
         {
            path: "/starred-tasks",
            element: <StarredTasks></StarredTasks>,
         },
      ],
   },

   {
      path: '*',
      element: <Page404></Page404>
   }
]);