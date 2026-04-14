
import { use } from 'react';
import KeeperCard from '../components/ui/KeeperCard';


const cardPromise =fetch('/data.json').then(res=> res.json())

const AllCard = () => {

const Cards = use(cardPromise)
// console.log(Cards, " Cards Data")

    return (
        <div className='container mx-auto mt-10'>
            {/* All Card */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {
        Cards.map((Card, ind )=> {
            return (
            <KeeperCard key={ind} Card={Card} ></KeeperCard>
            );
        })
     }
</div>
            </div>
        </div>
    );
};

export default AllCard;