"use client";

import { useCart } from "@/context/ProdCxt";
import axios from "axios";

export default function Buy() {
  const {
    cartState: { products },
  } = useCart();

  console.log({ products });
  const handleBuy = async () => {
    try {
      const { data } = await axios.post(
        "/api/payment/create-checkout-session",
        { products }
      );
      console.log(data);

      window.location.href = data?.url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="fixed bottom-10 left-[50%] translate-x-[-50%] w-[80vw] px-4 py-2 transition-all bg-blue-500 hover:bg-blue-700 font-semibold rounded-md"
      onClick={handleBuy}
    >
      BUY
    </button>
  );
}
