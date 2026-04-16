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

  if (!expectedCard) {
    return (
      <p className="text-center mt-10 text-red-500">
        Card not found
      </p>
    );
  }

  const { callHistory, setCallHistory } = useContext(AllCardContext);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addHistory = (type) => {
    const newItem = {
      id: expectedCard.id,
      title: type,
      name: expectedCard.name,
      date: formattedDate,
    };

    setCallHistory([...callHistory, newItem]);

    toast.success(`${type} with ${expectedCard.name}`, {
      theme: "dark",
      position: "top-center",
      transition: Slide,
      autoClose: 1500,
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">

      <div className="w-full lg:w-1/3 space-y-4">

        {/* CARD */}
        <div className="card bg-gray-100 w-full shadow-md hover:shadow-xl transition border border-gray-200 rounded-2xl">

          <figure className="px-6 pt-6">
            <img
              src={expectedCard.picture}
              alt=""
              className="rounded-full w-24 h-24 object-cover ring-4 ring-indigo-100" />
          </figure>

          <div className="card-body items-center text-center px-4">

            <h2 className="card-title text-lg">{expectedCard.name}</h2>

            <p className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              expectedCard.status === "overdue"
                ? "text-red-600 bg-red-100"
                : "text-yellow-600 bg-yellow-100"
            }`}>
              {expectedCard.status}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {expectedCard.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600">{expectedCard.bio}</p>
            <p className="text-sm text-gray-500 break-all">{expectedCard.email}</p>
          </div>
        </div>

        {/*BUTTONS */}
        <div className="flex flex-col gap-3">

          <button className="flex items-center justify-center gap-2 px-4 py-2
           rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-not-allowed">
            <HiOutlineBellSnooze />
            Snooze 2 weeks
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2
           rounded-xl bg-green-50 text-green-700 border cursor-not-allowed">
            <RiInboxArchiveLine />
            Archive
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2
           rounded-xl bg-red-50 text-red-600 border cursor-not-allowed">
            <RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 space-y-6">

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* count card 1 */}
          <div className=" p-5 text-center rounded-2xl shadow border border-gray-300 border-dashed bg-gray-100">
            <h1 className="text-3xl font-bold text-green-600">
              {expectedCard.days_since_contact}
            </h1>
            <p className="text-gray-500 text-sm mt-2">Days Since Contact</p>
          </div>
              {/* count card 2 */}
          <div className=" p-5 text-center rounded-2xl shadow border  border-gray-300 border-dashed bg-gray-100">
            <h1 className="text-3xl font-bold text-indigo-600 ">
              {expectedCard.goal}
            </h1>
            <p className="text-gray-500 text-sm mt-2">Goal (Days)</p>
          </div>
              {/* count card 3 */}
          <div className=" p-5 text-center rounded-2xl shadow border  border-gray-300 border-dashed bg-gray-100">
            <h1 className="text-xl font-bold text-purple-500">
              {expectedCard.next_due_date}
            </h1>
            <p className="text-gray-500 text-sm mt-2">Next Due</p>
          </div>

        </div>

        {/* GOAL SECTION */}
        <div className=" border border-gray-300 border-dashed bg-gray-100  rounded-2xl shadow p-5 flex flex-col
         sm:flex-row justify-between items-start sm:items-center gap-3">

          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Relationship Goal
            </h2>
            <p className="text-sm text-gray-500 ">
              Connect every <span className="font-bold">{expectedCard.goal}</span> <span className="font-bold">days</span>
            </p>
          </div>

          <button className="px-4 py-2 rounded-xl bg-green-100 text-green-700 border
           border-dashed font-semibold cursor-not-allowed">
            Edit
          </button>

        </div>

        {/* QUICK CHECK-IN */}
        <div className=" border rounded-2xl shadow p-5 border-gray-300 border-dashed bg-gray-100">

          <h1 className="font-semibold text-lg text-green-600 mb-4">
            Quick Check-In
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Call button */}
            <button
              onClick={() => addHistory("Call")}
              className="flex items-center justify-center gap-2 btn rounded-full bg-blue-100">
              <LuPhoneCall /> Call
            </button>
              {/* text button */}
            <button
              onClick={() => addHistory("Text")}
              className="flex items-center justify-center gap-2 btn rounded-full bg-green-100">
              <MdOutlineTextsms /> Text
            </button>
              {/* video button */}
            <button
              onClick={() => addHistory("Video")}
              className="flex items-center justify-center gap-2 btn rounded-full bg-purple-100">
              <IoVideocamOutline /> Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;