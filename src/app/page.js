import Prods from "@/components/Prods";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Prods />
      <Link
        href={"/cart"}
        className="fixed flex items-center justify-center bottom-10 left-[50%] translate-x-[-50%] w-[80vw] px-4 py-2 transition-all bg-blue-500 hover:bg-blue-700 font-semibold rounded-md"
      >
        Go To Cart
      </Link>
    </>
  );
}
