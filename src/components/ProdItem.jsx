import CartBtn from "./CartBtn";

export default function ProdItem({ prod }) {
  return (
    <div className="max-w-sm rounded border-2 border-neutral-400 overflow-hidden shadow-lg">
      <img src={prod.thumbnail} alt={prod.title} className="w-full" />
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
      <CartBtn prod={prod} />
    </div>
  );
}
