import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { CheckoutCartItem } from "../CheckoutCartItem";
import { CloseIcon } from "../../assets/Icons";
import "./styles.css";

export const CheckoutCart = () => {
  const {
    productsToCard,
    openCheckoutCart,
    handleDeleteProduct,
    isCheckoutCartOpen,
  } = useContext(ShoppingContext);

  return (
    <aside
      className={`${
        isCheckoutCartOpen ? "grid" : "hidden"
      } scrollBar bg-white absolute w-80 h-auto 
      max-h-96 grid-cols-1 gap-3 right-3 p-2
       z-30 overflow-auto shadow-lg shadow-gray-200/75`}
    >
      {productsToCard?.length == 0 && (
        <p className="font-bebas text-xl flex justify-center items-center select-none">
          EL CARRITO ESTÁ VACÍO
        </p>
      )}

      {productsToCard?.length > 0 && (
        <>
          <div className="flex flex-row flex-1 justify-between items-center">
            <h3 className="font-bebas text-xl font-bold">Detail</h3>
            <div onClick={openCheckoutCart}>
              <CloseIcon />
            </div>
          </div>

          {productsToCard.map((product) => (
            <CheckoutCartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images[0]}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}

          <button
            type="button"
            className="font-bebas text-xl w-full h-10 bg-black text-white cursor-pointer"
          >
            Ir al checkout
          </button>
        </>
      )}
    </aside>
  );
};
