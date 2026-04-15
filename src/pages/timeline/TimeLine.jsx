import { useContext, useMemo, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdCall } from 'react-icons/io';
import { AllCardContext } from "../../context/AllCardProvider";
import { IoTimerOutline, IoVideocam } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatSquareTextFill } from "react-icons/bs";
import { Link } from "react-router";
import { MdArrowBackIos, MdTextsms } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";





const TimeLine = () => {
  
const { callHistory } = useContext(AllCardContext);

// const [filterData, setFilterData] = useState(callHistory);console.log(filterData, 'filterData');

// useEffect(() => {

//   let data = callHistory;

//   if (filter === "Text") {
//     data = callHistory.filter((item) => item.title === "Text");
//   } 
//   if (filter === "Video") {
//     data = callHistory.filter((item) => item.title === "Video");
//   } 
//    if (filter === "Call") {
//     data = callHistory.filter((item) => item.title === "Call");
//   } 
//   if (filter === "See all history") {
//     data = callHistory;
//   }

//   return callHistory
// }, [filter, callHistory]);

const [filter, setFilter] = useState("See all history");

const filterHistory = useMemo (()=> {
 if(filter === "See all history"){
  return callHistory;
 }
 if(filter === "Text"){
  return callHistory.filter((text)=>text.title === "Text");
 }
  if(filter === "Video"){
  return callHistory.filter((video)=>video.title === "Video");
 }
 if(filter === "Call"){
  return callHistory.filter((call)=>call.title === "Call");
 }
 return callHistory
}, [filter, callHistory]);


const logos ={
  Call: <FiPhoneCall />,
  Text:<BsChatSquareTextFill /> ,
  Video: <IoVideocam />,
};
// console.log(title)

  return (

    <div className='container mx-auto mb-96'>

      <h1 className='font-bold text-3xl py-5'>Time<span className="text-green-600">line</span></h1>

      {/* dropdown */}
      <div className='mb-5'>
        <button
          className="btn  max-w-xs"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}>
          {filter}
          <IoMdArrowDropdownCircle className='text-xl ml-10' />
        </button>

        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto" id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}>
          <li className={filter === "Call" ? " bg-green-500 text-white rounded" : ""} onClick={()=> setFilter('Call')}><a><IoMdCall />Call</a></li>
          <li className={filter === "Text" ? "bg-green-500 text-white rounded" : ""} onClick={()=> setFilter('Text')}><a><MdTextsms />Text</a></li>
          <li className={filter === "Video" ? "bg-green-500 text-white rounded" : ""} onClick={()=> setFilter('Video')}><a><IoVideocam />Video</a></li>
          <li className={filter === "See all history" ? "bg-green-500 text-white rounded" : ""} onClick={()=> setFilter('See all history')}><a><TbLayoutDashboardFilled />All History</a></li>
        </ul>
      </div>

      {/* timeline */}
      <div>
        {callHistory.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-2xl py-16 my-10 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">

             {/* icon */}
             <div className="bg-white p-5 rounded-full shadow-md mb-4">
               <IoTimerOutline className="text-4xl text-green-600" />
             </div>
           
              {/* title */}
              <h2 className="text-2xl font-semibold text-gray-700">
                No Timeline Yet
              </h2>
              <p className="text-gray-500 mt-2 text-center max-w-sm">
                You haven’t made any calls yet. Start connecting with people and your activity will appear here.
              </p>

              {/* button */}
               <Link to="/">
                    <button className="mt-5 px-5 py-2 rounded-full bg-green-300 hover:bg-green-500 text-black cursor-pointer flex items-center">
                      <MdArrowBackIos /> Go back home
                    </button>
                </Link>

      </div>

        ) : (
          filterHistory.map((item) => (
        <div key={item.id} className="mb-4">

    <div className="flex items-center gap-4 border border-gray-200 bg-white shadow-sm hover:shadow-md transition rounded-2xl p-4">

    {/* icon / image */}
       <div className=" p-3 bg-green-100 text-2xl rounded-4xl">
         {logos[item.title]}
        
      </div>

      {/* content */}
      <div className="flex-1">
         <p className="font-semibold text-gray-800">
          <span>{item.title} with</span> <span className="text-green-600">{item.name}</span>
        </p>

        <p className="text-sm text-gray-500">
          {item.date}
        </p>
      </div>
    </div>

     </div>
          ))
        )}
      </div>

    </div>
  );
};

export default TimeLine;