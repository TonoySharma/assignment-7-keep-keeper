
import React, { use } from 'react';


const cardPromise =fetch('/data.json').then(res=> res.json())

const AllCard = () => {

const Cards = use(cardPromise)
console.log(Cards, " Cards Data")

    return (
        <div className='container mx-auto mt-10 my-10'>
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

            {/* All Card */}
            <div>
                <h1 className='font-bold text-3xl text-center my-5'>Your Friends</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {
        Cards.map(Card => {
            return (
                <div className=" bg-gray-100 shadow-sm rounded-2xl border border-gray-300 p-5 hover:shadow-xl">
                    
                    <div className="flex flex-col items-center text-center space-y-3">
                        
                        <img
                            src={Card.picture}
                            className="w-25 h-25 rounded-full object-cover border-2 border-gray-300" />

                        <h2 className="text-lg font-bold">{Card.name}</h2>

                        <p className="text-sm text-gray-500">
                            Days: {Card.days_since_contact}
                        </p>

                        <p className={`text-sm font-semibold  ${
                            Card.status === "overdue"
                                ? "text-red-600 bg-red-200 py-1 px-3 rounded-full border"
                                : "text-yellow-600 bg-yellow-100 py-1 px-3 rounded-full border"
                        }`}>
                            {Card.status}
                        </p>

                        <div className="flex flex-wrap justify-center gap-5 mt-2">
                            {
                                Card.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full border ">
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>

                    </div>
                </div>
            );
        })
    }
</div>
            </div>
        </div>
    );
};

export default AllCard;