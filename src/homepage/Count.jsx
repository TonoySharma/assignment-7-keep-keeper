import React from 'react';

const Count = () => {
    return (
        <div className='mx-auto container my-8'>
                {/* Count Card */}
            <div className='flex gap-6 items-center justify-center mb-10'>
                 {/* card 1 */}
                <div className='border w-fit p-2 py-7 px-20 border-gray-400 rounded-xl shadow bg-gray-100 
                hover:scale-105 hover:bg-gray-200 transition duration-300'>
                    
                      <h1 className='text-center font-bold text-2xl'>11</h1>
                      <p className='font-semibold text-gray-500 text-center'>Total Friends</p>
                
                </div>
                 {/* card 2 */}
                <div className='border w-fit p-2 py-7 px-23 border-gray-400 rounded-xl shadow bg-gray-100 
                hover:scale-105 hover:bg-gray-200 transition duration-300'>
                    
                      <h1 className='text-center font-bold text-2xl'>3</h1>
                      <p className='font-semibold text-gray-500 text-center'>On Track</p>
                
                </div>
                 {/* card 3 */}
                <div className='border w-fit p-2 py-7 px-19 border-gray-400 rounded-xl shadow bg-gray-100 
                hover:scale-105 hover:bg-gray-200 transition duration-300'>
                    
                      <h1 className='text-center font-bold text-2xl'>6</h1>
                      <p className='font-semibold text-gray-500 text-center'>Need Attention</p>
                
                </div>
                 {/* card 4 */}
                <div className='border w-fit p-2 py-7 px-10 border-gray-400 rounded-xl shadow bg-gray-100 
                hover:scale-105 hover:bg-gray-200 transition duration-300'>
                    
                      <h1 className='text-center font-bold text-2xl'>12</h1>
                      <p className='font-semibold text-gray-500 text-center'>Interactions This Month</p>              
                </div>

            </div>
            <div>
                 <h1 className='font-bold text-3xl text-center my-5'>Your Friends</h1>
            </div>
        </div>
    );
};

export default Count;