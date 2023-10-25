import { useState, useEffect, createContext } from "react";
import { getProduct } from "../services/fakestore.js";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [countProduct, setCountProuduct] = useState(0);

  const [productToShow, setProductToShow] = useState({});
  const [productsToCard, setProductsToCard] = useState([]);
  const [isCheckoutCartOpen, setIsCheckoutCartOpen] = useState(false);

  useEffect(() => {
    getProduct().then((newProduct) => setProducts(newProduct));
  }, []);

  const addProductsToCard = (productData) => {
    setCountProuduct((countProduct) => countProduct + 1);
    setProductToShow(productData);
    setProductsToCard([...productsToCard, productData]);
    console.log(productsToCard);
  };

  const openCheckoutCart = () => {
    setIsCheckoutCartOpen(!isCheckoutCartOpen);
  };

  return (
    <ShoppingContext.Provider
      value={{
        products,
        countProduct,
        productToShow,
        productsToCard,
        setProductToShow,
        addProductsToCard,
        isCheckoutCartOpen,
        openCheckoutCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
