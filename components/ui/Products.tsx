import Image from "next/image";
import items from "@/lib/data";
import { useRouter } from "next/navigation";
import Product from "../Product";
const Products = () => {
  return (
    <section className="w-[90%] gap-2 mx-auto my-2 pl-60 pr-0 flex flex-wrap justify-between">
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Products;
