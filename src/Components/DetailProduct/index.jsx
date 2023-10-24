import { useContext } from "react";
import { ShoppingContext } from "../../Context";

import { ShoppingBagSvg } from "../../assets/ShoppingBagSvg";

export const DetailProduct = () => {
  const { productToShow, setProductToShow, setCountProuduct } =
    useContext(ShoppingContext);

  const saveProduct = (product) => {
    setCountProuduct((countProduct) => countProduct + 1);
    setProductToShow(product);
  };

  return (
    <article className="w-full h-auto flex flex-row gap-4">
      <header className="w-1/2 m-4">
        <figure className="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
          {productToShow.images.map((image, imageIndex) =>
            imageIndex === 0 ? (
              <img
                className="w-full h-80 rounded-xl col-span-4 object-cover"
                src={image}
                alt={productToShow.title}
              />
            ) : (
              <img
                className="w-40 h-24 rounded-lg object-cover overflow-hidden"
                src={image}
                alt={productToShow.title}
              />
            )
          )}
        </figure>
      </header>
      <div className="w-1/2  m-4 flex flex-col gap-12">
        <h2 className="font-bold text-4xl">{productToShow.title}</h2>
        <p className="text-2xl">$ {productToShow.price}</p>
        <p>{productToShow.description}</p>
        <button
          onClick={() => saveProduct(productToShow)}
          className="bg-gray-950 hover:bg-gray-800 w-full h-10 flex justify-center items-center gap-4 rounded-lg text-white text-ms"
        >
          {<ShoppingBagSvg white />} Add to cart
        </button>
      </div>
    </article>
  );
};
