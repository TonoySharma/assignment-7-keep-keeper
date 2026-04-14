
import React, { Suspense } from 'react';
import Banner from '../../homepage/Banner';
import AllCard from '../../homepage/AllCard';
import { RingLoader } from 'react-spinners';
import Count from '../../homepage/Count';

const Homepage = () => {
    return (
      <div>
         <Banner></Banner>
         <Count></Count>
         
         <Suspense fallback={
           <div className="flex justify-center items-center h-40">
                <RingLoader color="#6366f1" />
          </div>
         }>
         
           <AllCard></AllCard>
         </Suspense>
         
      </div>
    );
};

export default Homepage;