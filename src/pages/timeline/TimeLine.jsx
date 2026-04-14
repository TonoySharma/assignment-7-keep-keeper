import React from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

const TimeLine = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-5'>
               <button className="btn w-full max-w-xs" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                 Filter timeline<IoMdArrowDropdownCircle className='text-xl ml-10' />
              </button>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
               popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
               <li><a>Item 2</a></li>
           </ul>
            </div>
        </div>
    );
};

export default TimeLine;