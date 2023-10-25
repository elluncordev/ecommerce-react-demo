import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ShoppingContext } from "../../context";
import { AddIcon, CheckIcon } from "../../assets/Icons";

export const CardProduct = ({ data }) => {
  const { setProductToShow, addProductsToCard, productsToCard } =
    useContext(ShoppingContext);

  const renderIcon = (id) => {
    const isInCart =
      productsToCard.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <span className="absolute w-5 h-5 top-2 right-2 bg-white rounded-full flex justify-center items-center z-10">
          <CheckIcon />
        </span>
      );
    } else {
      return (
        <span
          onClick={() => addProductsToCard(data)}
          className="absolute w-5 h-5 top-2 right-2 bg-white rounded-full flex justify-center items-center z-10"
        >
          <AddIcon />
        </span>
      );
    }
  };

  return (
    <article
      onClick={() => setProductToShow(data)}
      className="cursor-pointer w-56 h-60 rounded-md overflow-hidden select-none relative"
    >
      {renderIcon(data.id)}
      <NavLink to={`/product/${data.id}`}>
        <figure className="relative mb-2 w-full h-3/4">
          <img
            className="w-full h-full object-cover"
            src={data.images[0]}
            alt={data.description}
          />

          <div className="top-0 absolute hover:-translate-y-1 w-full h-full duration-200">
            <span className="bg-white absolute bottom-0 left-2 px-2 py-1">
              $ {data.price}
            </span>
          </div>
        </figure>
      </NavLink>
      <NavLink to={`/product/${data.id}`}>
        <section className="flex flex-col pl-3 gap-1">
          <p className="truncate">{data.title}</p>
          <p className="text-slate-500/50">{data.category.name}</p>
        </section>
      </NavLink>
    </article>
  );
};
