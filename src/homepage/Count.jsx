import React from 'react';

const Count = () => {
  return (
    <div className="mx-auto container my-8 px-4">

      {/* Count Cards */}
      <div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center mb-10">

        {/* card 1 */}
        <div className="w-full sm:w-[45%] md:w-[22%] border p-6 border-gray-400 rounded-xl shadow bg-gray-100 
        hover:scale-105 hover:bg-gray-200 transition duration-300 text-center">

          <h1 className="font-bold text-2xl">11</h1>
          <p className="font-semibold text-gray-500">Total Friends</p>

        </div>

        {/* card 2 */}
        <div className="w-full sm:w-[45%] md:w-[22%] border p-6 border-gray-400 rounded-xl shadow bg-gray-100 
        hover:scale-105 hover:bg-gray-200 transition duration-300 text-center">

          <h1 className="font-bold text-2xl">3</h1>
          <p className="font-semibold text-gray-500">On Track</p>

        </div>

        {/* card 3 */}
        <div className="w-full sm:w-[45%] md:w-[22%] border p-6 border-gray-400 rounded-xl shadow bg-gray-100 
        hover:scale-105 hover:bg-gray-200 transition duration-300 text-center">

          <h1 className="font-bold text-2xl">6</h1>
          <p className="font-semibold text-gray-500">Need Attention</p>

        </div>

        {/* card 4 */}
        <div className="w-full sm:w-[45%] md:w-[22%] border p-6 border-gray-400 rounded-xl shadow bg-gray-100 
        hover:scale-105 hover:bg-gray-200 transition duration-300 text-center">

          <h1 className="font-bold text-2xl">12</h1>
          <p className="font-semibold text-gray-500">Interactions This Month</p>

        </div>

      </div>

      <div>
        <h1 className="font-bold text-3xl text-center my-5">
          Your Friends
        </h1>
      </div>

    </div>
  );
};

export default Count;