import { useState, createContext } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  const [countProduct, setCountProuduct] = useState(0);
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingContext.Provider
      value={{
        countProduct,
        setCountProuduct,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
