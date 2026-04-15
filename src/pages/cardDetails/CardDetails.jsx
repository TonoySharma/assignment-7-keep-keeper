/* eslint-disable react-hooks/rules-of-hooks */

import { useContext } from 'react';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line, RiInboxArchiveLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { AllCardContext } from '../../context/AllCardProvider';
import { Slide, toast } from 'react-toastify';

const CardDetails = () => {
  const { id } = useParams();
  const Cards = useLoaderData();

  const expectedCard = Cards.find((card) => card.id === Number(id));
  // console.log(expectedCard ,"expectedCard");

  if (!expectedCard) {
    return (
      <p className="text-center mt-10 text-red-500">
        Card not found
      </p>
    );
  }
const { callHistory, setCallHistory } = useContext(AllCardContext);

const date = new Date();

const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Call 
const newCall = (card) => {
  const newCallDetails = {
    id: card.id,
    title: "Call",
    name: card.name,
    date: formattedDate,
  };
  
  // if (isExist) {
  //   toast.error("Already called!",{
  //     theme: "dark",
  //     transition: Slide,
  //     autoClose: 1700,
  //   });
  //   return;
  // }

setCallHistory([...callHistory, newCallDetails]);
  toast.success(`Call with ${card.name}`,{
    theme: "dark",
    transition: Slide,
    autoClose: 1700,
  });
};

       // text
const newText = (card) => {
 const newCallDetails = {
    id: card.id,
    title: "Text",
    name: card.name,
    date: formattedDate,
  };
  
setCallHistory([...callHistory, newCallDetails]);
  toast.success(`Text with ${card.name}`,{
    theme: "dark",
    transition: Slide,
    autoClose: 1700,
  });
};
    // Video
const newVideo = (card) => {
 const newCallDetails = {
    id: card.id,
    title: "Video",
    name: card.name,
    date: formattedDate,
  };
setCallHistory([...callHistory, newCallDetails]);

  toast.success(`Video with ${card.name}`,{
    theme: "dark",
    transition: Slide,
    autoClose: 1700,
  });

}


  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-8 py-6'>

      {/* Card details */}
      <div className='space-y-4'>
        
        {/* PROFILE CARD */}
        <div className="card bg-gray-100 w-80 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-2xl">
          
          <figure className="px-10 pt-10">
            <img
              src={expectedCard.picture}
              alt=""
              className="rounded-full w-25 h-25 object-cover ring-4 ring-indigo-100"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">{expectedCard.name}</h2>

            <p className={`text-xs font-semibold border ${
              expectedCard.status === "overdue"
                ? "text-red-600 bg-red-100 px-3 py-1 rounded-full"
                : "text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full"
            }`}>
              {expectedCard.status}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {
                expectedCard.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border">
                    {tag}
                  </span>
                ))
              }
            </div>

            <p className='text-sm text-gray-600'>{expectedCard.bio}</p>
            <p className='text-sm text-gray-500'>{expectedCard.email}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className='flex flex-col gap-3 w-full max-w-xs'>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:scale-105 hover:shadow-lg transition duration-300 cursor-not-allowed">
            <HiOutlineBellSnooze className='text-xl' />
            Snooze 2 weeks
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-700 font-medium hover:bg-green-100 transition duration-300 cursor-not-allowed border">
            <RiInboxArchiveLine className='text-xl' />
            Archive
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition duration-300 cursor-not-allowed border">
            <RiDeleteBin6Line className='text-xl' />
            Delete
          </button>

        </div>
      </div>

      {/* All RIGHT SIDE */}
      <div className='flex-1 space-y-6'>

        {/* STATS */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          
          <div className='bg-white p-5 text-center rounded-2xl shadow border border-gray-300'>
            <h1 className='text-3xl font-bold text-green-600'>{expectedCard.days_since_contact}</h1>
            <p className='text-gray-500 text-sm mt-2'>Days Since Contact</p>
          </div>

          <div className='bg-white p-5 text-center rounded-2xl shadow border border-gray-300'>
            <h1 className='text-3xl font-bold text-indigo-600'>{expectedCard.goal}</h1>
            <p className='text-gray-500 text-sm mt-2'>Goal (Days)</p>
          </div>

          <div className='bg-white p-5 text-center rounded-2xl shadow border border-gray-300'>
            <h1 className='text-2xl font-semibold text-purple-500 '>{expectedCard.next_due_date}</h1>
            <p className='text-gray-500 text-sm mt-2'>Next Due</p>
          </div>

        </div>

        {/* GOAL */}
        <div className='bg-white border rounded-2xl shadow p-5 flex justify-between items-center border-gray-300'>
          <div>
            <h2 className='text-lg font-semibold text-green-600'>Relationship Goal</h2>
            <p className='text-sm text-gray-500'>Connect every <span className='font-bold border-b'>{expectedCard.goal}Goal</span></p>
          </div>

          <button className="px-4 py-2 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition cursor-not-allowed border border-green-300">
            Edit
          </button>
        </div>

        {/* Button  */}
        <div className='bg-white border rounded-2xl shadow p-5 border-gray-300'>
          <h1 className='font-semibold text-lg text-green-600 mb-4'>Quick Check-In</h1>

          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            
            <div className=' rounded-xl p-4 flex flex-col items-center'>
              
             <button onClick={() => newCall(expectedCard)}className="btn btn-wide h-15 rounded-full hover:bg-green-200"><LuPhoneCall className='text-xl' />Call</button>
            </div>

            <div className=' rounded-xl p-4 flex flex-col items-center'>
            <button onClick={() => newText(expectedCard)} className="btn btn-wide h-15 rounded-full hover:bg-purple-200"><MdOutlineTextsms className='text-xl mt-1' />Text</button>
            </div>

            <div className=' rounded-xl p-4 flex flex-col items-center'>
              <button onClick={() => newVideo(expectedCard)} className="btn btn-wide h-15  rounded-full hover:bg-blue-200"><IoVideocamOutline className='text-xl' />Video</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CardDetails;

// onClick={()=> handleCall(expectedCard)}