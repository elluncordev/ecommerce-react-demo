import { useState, useEffect } from "react";
import { getProduct } from "../../services/fakestore.js";
import { CardProduct } from "../../Components/CardProdut";

export function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProduct().then((newProduct) => setProducts(newProduct));
  }, []);

  return (
    <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg col-span-2 ">
      {products?.map((product) => (
        <CardProduct key={product.id} data={product} />
      ))}
    </section>
  );
}
