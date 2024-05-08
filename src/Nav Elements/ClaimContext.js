import React, { createContext, useContext, useState } from "react";

const ClaimContext = createContext();

export const useClaimContext = () => useContext(ClaimContext);

export const ClaimProvider = ({ children }) => {
  const [claimData, setClaimData] = useState(null);

  const setClaim = (data) => {
    setClaimData(data);
  };

  return (
    <ClaimContext.Provider value={{ claimData, setClaim }}>
      {children}
    </ClaimContext.Provider>
  );
};
