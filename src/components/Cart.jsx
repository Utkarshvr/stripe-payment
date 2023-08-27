"use client";

import { useCart } from "@/context/ProdCxt";
import ProdItem from "./ProdItem";
import Buy from "./Buy";

export default function Cart() {
  const { cartState } = useCart();
  console.log(cartState);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1>Your Cart</h1>
      <Buy />
      {cartState.products.map((product) => (
        <ProdItem key={product.id} prod={product} cartProd />
      ))}
    </div>
  );
}
