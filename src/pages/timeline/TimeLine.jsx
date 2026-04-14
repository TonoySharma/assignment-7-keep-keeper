import { useContext } from "react";
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { AllCardContext } from "../../context/AllCardProvider";

const TimeLine = () => {
  const { callHistory } = useContext(AllCardContext);

  return (
    <div className='container mx-auto'>

      <h1 className='font-bold text-3xl py-5'>Timeline</h1>

      {/* dropdown */}
      <div className='my-5'>
        <button
          className="btn w-full max-w-xs"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}>
          Filter timeline
          <IoMdArrowDropdownCircle className='text-xl ml-10' />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}>
          <li><a>Call</a></li>
          <li><a>Text</a></li>
          <li><a>Video</a></li>
        </ul>
      </div>

      {/* timeline */}
      <div>
        {callHistory.length === 0 ? (
          <p className="text-2xl font-semibold text-gray-500 text-center my-10">No history found</p>
        ) : (
          callHistory.map((item) => (
            <div key={item.id} className="flex gap-3 items-center mb-4">

              <div>
                <img src={item.title} alt="" />
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default TimeLine;