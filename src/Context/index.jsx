import { useState, createContext } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  const [countProduct, setCountProuduct] = useState(0);
  return (
    <ShoppingContext.Provider
      value={{
        countProduct,
        setCountProuduct,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
