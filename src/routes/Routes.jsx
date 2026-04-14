import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import TimeLine from "../pages/timeline/TimeLine";
import StatsChart from "../pages/stats/StatsChart";
import CardDetails from "../pages/cardDetails/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path:"/stats",
        element: <StatsChart></StatsChart>,
      },
      {
        path: "/cardDetails/:id",
        element:<CardDetails></CardDetails>,
        loader: ()=> fetch("/data.json")
      }
    ],
    errorElement:<ErrorPage></ErrorPage>,
  },
]);
