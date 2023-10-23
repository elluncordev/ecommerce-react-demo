import { useContext } from "react";
import { ShoppingContext } from "../../Context";

import { ShoppingBagSvg } from "../../assets/ShoppingBagSvg";

export const DetailProduct = () => {
  const { setCountProuduct } = useContext(ShoppingContext);
  return (
    <article className="w-full h-auto flex flex-row gap-4">
      <header className="w-1/2 m-4">
        <figure className="mt-2 grid grid-cols-4 gap-2 overflow-hidden">
          <img
            className="w-full h-80 rounded-xl col-span-4 object-cover"
            src=""
            alt=""
          />
          <img
            className="w-40 h-28 rounded-lg object-cover overflow-hidden"
            src=""
            alt=""
          />
          <img
            className="w-40 h-28 rounded-lg object-cover overflow-hidden"
            src=""
            alt=""
          />
          <img
            className="w-40 h-28 rounded-lg object-cover overflow-hidden"
            src=""
            alt=""
          />
        </figure>
      </header>
      <div className="w-1/2  m-4 flex flex-col gap-12">
        <h2 className="font-bold text-4xl">Nombre del producto aaaaa</h2>
        <p className="text-2xl">$2555</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          quisquam numquam accusamus, necessitatibus nulla ea cumque quidem
          veritatis! Perferendis doloremque voluptas eos, obcaecati natus
          dolorum similique provident illo exercitationem repellat.
        </p>
        <button
          onClick={() => setCountProuduct((countProduct) => countProduct + 1)}
          className="bg-gray-950 hover:bg-gray-800 w-full h-10 flex justify-center gap-4 items-center rounded-lg text-white text-ms"
        >
          {<ShoppingBagSvg white />} Add to cart
        </button>
      </div>
    </article>
  );
};
