"use client";
import { useEffect, useState } from "react";
import ProdItem from "./ProdItem";
import { useCart } from "@/context/ProdCxt";
import axios from "axios";

export default function Prods() {
  const [prods, setProds] = useState([]);
  const { cartState } = useCart();
  console.log(cartState);

  useEffect(() => {
    fetchProds();
  }, []);

  const fetchProds = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data);
      setProds(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1>All Products</h1>
      {prods.map((product) => (
        <ProdItem key={product.id} prod={product} />
      ))}
    </div>
  );
}
