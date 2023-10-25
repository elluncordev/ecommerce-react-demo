import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { CheckoutCartItem } from "../CheckoutCartItem";
import { Close } from "../../assets/Icons";
import "./styles.css";

export const CheckoutCart = () => {
  const { productsToCard, openCheckoutCart, isCheckoutCartOpen } =
    useContext(ShoppingContext);

  return (
    <aside
      className={`${
        isCheckoutCartOpen ? "grid" : "hidden"
      } scrollBar bg-white absolute w-80 h-auto max-h-96  grid-cols-1 gap-3 right-4 p-2 border-slate-900 border-[1px] z-30 overflow-auto`}
    >
      {productsToCard?.length == 0 && (
        <p className="font-bold flex justify-center p-1">
          EL CARRITO ESTA VACIO
        </p>
      )}

      {productsToCard?.length > 0 && (
        <>
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-bold">Detail</h3>
            <div onClick={openCheckoutCart}>
              <Close />
            </div>
          </div>

          {productsToCard.map((product) => (
            <CheckoutCartItem
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              images={product.images[0]}
            />
          ))}

          <button
            type="button"
            className="w-full h-8 bg-black text-white cursor-pointer"
          >
            Ir al checkout
          </button>
        </>
      )}
    </aside>
  );
};
