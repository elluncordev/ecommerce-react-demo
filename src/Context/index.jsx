import { createContext } from "react";

const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  return <ShoppingContext.Provider>{children}</ShoppingContext.Provider>;
};
