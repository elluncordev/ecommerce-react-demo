import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import { CardProduct } from "../../Components/CardProdut";

export function Home() {
  const { products } = useContext(ShoppingContext);

  return (
    <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg col-span-2 ">
      {products?.map((product) => (
        <CardProduct key={product.id} data={product} />
      ))}
    </section>
  );
}
