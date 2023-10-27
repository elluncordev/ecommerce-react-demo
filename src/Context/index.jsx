import { useState, useEffect, createContext } from "react";
import { getProduct } from "../services/fakestore.js";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [countProduct, setCountProuduct] = useState(0);

  const [productToShow, setProductToShow] = useState({});
  const [productsToCard, setProductsToCard] = useState([]);
  const [isCheckoutCartOpen, setIsCheckoutCartOpen] = useState(false);

  const [searchByProduct, setSearchByProduct] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    getProduct().then((newProduct) => setProducts(newProduct));
  }, []);

  useEffect(() => {
    if (searchByProduct)
      setFilterProducts(filteredProductsByTittle(products, searchByProduct));
  }, [products, searchByProduct]);

  console.log(filterProducts);

  const addProductsToCard = (productData) => {
    setCountProuduct((countProduct) => countProduct + 1);
    setProductToShow(productData);
    setProductsToCard([...productsToCard, productData]);
  };

  const handleDeleteProduct = (id) => {
    const newCartProduct = productsToCard.filter((product) => product.id != id);
    setCountProuduct((countProduct) => countProduct - 1);
    setProductsToCard(newCartProduct);
  };

  const openCheckoutCart = () => {
    setIsCheckoutCartOpen(!isCheckoutCartOpen);
  };

  const handleSearchProduct = (searchProduct) => {
    setSearchByProduct(searchProduct);
  };

  const filteredProductsByTittle = (products, filterProducts) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(filterProducts.toLowerCase())
    );
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
        handleDeleteProduct,
        handleSearchProduct,
        filterProducts,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
