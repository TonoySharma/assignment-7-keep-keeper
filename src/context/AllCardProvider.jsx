import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AllCardContext = createContext();

const AllCardProvider = ({ children }) => {
const [callHistory, setCallHistory] = useState([])
const data = {callHistory, setCallHistory};
// console.log(callHistory, "callHistory")
  // const data = {
  //   text:"demo"
  // };

  return (
    <AllCardContext.Provider value={data}>
      {children}
    </AllCardContext.Provider>
  );
};

export default AllCardProvider;