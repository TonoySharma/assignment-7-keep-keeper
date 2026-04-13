
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
const {id} = useParams();
console.log(id ,'id');

const Cards = useLoaderData();
console.log(Cards, "Cards");

const expectedCard = Cards.find((card) => card.id === Number(id))
console.log(expectedCard, "expectedCard")


    return (
        <div>
            Card Details
        </div>
    );
};

export default CardDetails;