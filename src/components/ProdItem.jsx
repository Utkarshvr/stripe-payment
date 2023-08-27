"use client";
import { useCart } from "@/context/ProdCxt";
import Image from "next/image";

export default function ProdItem({ prod, cartProd }) {
  const { cartState, dispatch } = useCart();

  const handleAddToCart = () => {
    console.log(prod);
    dispatch({ type: "ADD_TO_CART", payload: { product: prod } });
  };
  const handleRemoveFromCart = () => {
    console.log(prod);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId: prod.id,
        productPrice: prod.price,
      },
    });
  };
  return (
    <div className="max-w-sm rounded border-2 border-neutral-400 overflow-hidden shadow-lg">
      <Image
        width={120}
        height={120}
        src={prod.thumbnail}
        alt={prod.title}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{prod.title}</div>
        <p className="text-white text-base">{prod.description}</p>
      </div>
      <div className="px-6 py-4">
        <div className="text-white text-xs">Brand: {prod.brand}</div>
        <div className="text-white text-xs">Category: {prod.category}</div>
        <div className="text-white text-base">Price: ${prod.price}</div>
        <div className="text-white text-base">Rating: {prod.rating}</div>
      </div>
      {!cartProd ? (
        <div className="px-6 py-4">
          {cartState.products.some((i) => i.id === prod.id) ? (
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
