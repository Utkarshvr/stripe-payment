import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-neutral-900 items-center justify-between p-4 ">
      <Link className="text-base font-bold text-white" href={"/"}>
        UV STORE
      </Link>
      <Link className="text-base font-bold text-white" href={"/cart"}>
        Cart
      </Link>
    </nav>
  );
}
