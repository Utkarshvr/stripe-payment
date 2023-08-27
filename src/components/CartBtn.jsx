"use client";
import { useCart } from "@/context/ProdCxt";

export default function CartBtn({ prod }) {
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
  );
}
