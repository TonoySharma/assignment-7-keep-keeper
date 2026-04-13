import React from 'react';

const Banner = () => {
    return (
          <div className='container mx-auto'>
              <div className='text-center mt-20 space-y-5'>
                <h1 className='font-bold text-4xl'>Friends to keep close in your life</h1>
                <p className='text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                 relationships that matter most.</p>
                 <div>
                    <button className='font-semibold border rounded cursor-not-allowed py-3 px-4 bg-green-800 text-white'>+ Add a Friend </button>
                 </div>
              </div>
        </div>
    );
};

export default Banner;