import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { ShoppingBanIcon } from "../../assets/Icons";

export const DetailProduct = () => {
  const { productToShow, addProductsToCard } = useContext(ShoppingContext);

  return (
    <article className="w-full h-auto flex flex-row gap-4">
      <header className="w-1/2 m-4">
        <figure className="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
          {productToShow.images.map((image, imageIndex) =>
            imageIndex === 0 ? (
              <img
                key={imageIndex}
                className="w-full h-80 rounded-xl col-span-4 object-cover"
                src={image}
                alt={productToShow.title}
              />
            ) : (
              <img
                key={imageIndex}
                className="w-40 h-24 rounded-lg object-cover overflow-hidden"
                src={image}
                alt={productToShow.title}
              />
            )
          )}
        </figure>
      </header>
      <div className="w-1/2  m-4 flex flex-col gap-12">
        <h2 className="font-bebas font-bold text-5xl">{productToShow.title}</h2>
        <p className="text-2xl">$ {productToShow.price}</p>
        <p>{productToShow.description}</p>
        <button
          onClick={() => addProductsToCard(productToShow)}
          className="font-bebas text-xl bg-gray-950 hover:bg-gray-800 w-full h-10 flex justify-center items-center gap-4 rounded-lg text-white"
          type="button"
        >
          {<ShoppingBanIcon white />} Add to cart
        </button>
      </div>
    </article>
  );
};
