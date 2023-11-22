"use client";
import items from "@/lib/data";
import Product from "../Product";
import { useSearchParams } from "next/navigation";
import PaginationControls from "../pagination-controls";

const Products = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"));
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "4";
  //mocked skipped and limited in the real app

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page); // 5,10,15
  const entries = items.slice(start, end);
  return (
    <section className="w-[90%] gap-2 mx-auto my-2 pl-60 pr-0 flex flex-wrap justify-between">
      <PaginationControls />
      {entries.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Products;
