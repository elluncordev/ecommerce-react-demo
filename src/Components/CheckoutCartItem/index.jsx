import { TrashProduct } from "../../assets/Icons";

export const CheckoutCartItem = ({ id, title, images, description, price }) => {
  return (
    <article
      key={id}
      className="flex w-full h-14 flex-row overflow-clip items-center justify-between gap-1 border-slate-300 border-[1px] p-1"
    >
      <img
        className="flex-none w-14 h-12 overflow-hidden object-center object-cover "
        src={images}
        alt={description}
      />

      <div className="w-3/5">
        <p className="truncate">{title}</p>
        <p className="text-gray-600">$ {price}</p>
      </div>

      <div className="group w-8 h-full flex justify-center items-center hover:bg-zinc-800 hover:fill-white p-2 cursor-pointer">
        <TrashProduct />
      </div>
    </article>
  );
};
