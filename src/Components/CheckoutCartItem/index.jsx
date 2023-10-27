import { TrashIcon } from "../../assets/Icons";

export const CheckoutCartItem = ({
  id,
  title,
  images,
  price,
  handleDeleteProduct,
}) => {
  return (
    <article className="flex w-full h-14 flex-row overflow-clip items-center justify-between gap-1 border-gray-100 border-[1px] p-1">
      <img
        className="flex-none w-14 h-12 overflow-hidden object-center object-cover "
        src={images}
        alt={title}
      />

      <div className="w-3/5">
        <p className="truncate">{title}</p>
        <p className="text-gray-600">$ {price}</p>
      </div>

      <button
        type="button"
        onClick={() => handleDeleteProduct(id)}
        className="group w-8 h-full flex justify-center items-center hover:bg-zinc-800 hover:fill-white p-2 cursor-pointer"
      >
        <TrashIcon />
      </button>
    </article>
  );
};
