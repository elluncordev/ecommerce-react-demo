import { useContext } from "react";

import { ShoppingContext } from "../../Context";
import { AddProductSvg } from "../../assets/AddProductSvg.jsx";

export const CardProduct = ({ data }) => {
  const { setCountProuduct } = useContext(ShoppingContext);
  return (
    <article className="cursor-pointer w-56 h-60 rounded-md overflow-hidden select-none">
      <figure className="relative mb-2 w-full h-3/4">
        <span
          onClick={() => setCountProuduct((countProduct) => countProduct + 1)}
          className="absolute w-5 h-5 top-2 right-1 bg-white rounded-full flex justify-center items-center z-10"
        >
          <AddProductSvg />
        </span>
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
      <section className="flex flex-col pl-3 gap-1">
        <p className="truncate">{data.title}</p>
        <p className="text-slate-500/50">{data.category.name}</p>
      </section>
    </article>
  );
};
