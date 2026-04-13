import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import TimeLine from "../pages/timeline/TimeLine";
import StatsChart from "../pages/stats/StatsChart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>
      },
      {
        path:"/stats",
        element: <StatsChart></StatsChart>
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);
