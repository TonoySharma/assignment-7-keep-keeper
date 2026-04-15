import React, { useContext } from "react";
import { AllCardContext } from "../../context/AllCardProvider";
import { RiDonutChartFill } from "react-icons/ri";
import { Link } from "react-router";
import { MdArrowBackIos } from "react-icons/md";

const StatsChart = () => {
  const { callHistory } = useContext(AllCardContext);

  return (
    <div className='container mx-auto'>

      <h1 className='font-bold text-3xl py-5'>
        Friendship Analytics
      </h1>

      {callHistory.length === 0 ? (
        
       <div>
           <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-2xl py-16 my-10 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
          
          <div className="bg-white p-5 rounded-full shadow-md mb-4">
            <RiDonutChartFill className="text-4xl text-purple-600" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">
            No data yet
          </h2>

          <p className="text-gray-500 mt-2 text-center max-w-sm">
            Make a call, send a text, or start a video to see your stats.
          </p>

         <Link to="/">
             <button className="mt-5 px-5 py-2 rounded-full bg-purple-300 hover:bg-purple-500 text-black cursor-pointer flex items-center">
                  <MdArrowBackIos  className="transition-transform duration-300 group-hover:-translate-x-1" /> 
                  Go back home
              </button>
          </Link>

        </div>
       </div>

      ) : (
        ""

      )}

    </div>
  );
};

export default StatsChart;