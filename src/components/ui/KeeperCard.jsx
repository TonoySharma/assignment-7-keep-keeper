import React from 'react';
import { Link } from 'react-router';

const KeeperCard = ({Card,id}) => {
    return (
            <Link to={`/CardDetails/:${Card.id}`} key={id} className=" bg-gray-100 shadow-sm rounded-2xl border border-gray-300 p-5 hover:shadow-xl">
                    
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
                </Link>
    );
};

export default KeeperCard;