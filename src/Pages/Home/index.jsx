import { useContext } from "react";
import { ShoppingContext } from "../../context";
import { CardProduct } from "../../components/CardProdut";

export function Home() {
  const { products } = useContext(ShoppingContext);

  return (
    <section className="grid gap-4 grid-cols-4 max-w-screen-lg col-span-2 w-[calc(90vw-90px)] ">
      {products?.slice(0, 20).map((product) => (
        <CardProduct key={product.id} data={product} />
      ))}
    </section>
  );
}
