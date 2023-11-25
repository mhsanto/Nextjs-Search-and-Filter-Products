import Recommended from "@/components/ui/recommended";
import Sidebar from "@/components/ui/sidebar/sidebar";
import Product from "@/components/Product";

import items from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "./skeleton";
type ProductsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Home({ searchParams }: ProductsProps) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const per_page =
    typeof searchParams.per_page === "string"
      ? Number(searchParams.per_page)
      : 6;
  //mocked skipped and limited in the real app
  const start = (page - 1) * per_page;
  const end = start + per_page; // 5,10,15
  const slicedItems = items.slice(start, end);
  const itemsLength = items.length;
  const hasPrevPage = start > 0;
  const hasNextPage = end < items.length;
  return (
    <>
      <Sidebar />
      <Recommended />
      {/* PAGINATION BUTTON */}
      <section className="w-[90%] mx-auto my-3 pr-0 flex flex-wrap gap-7 justify-center items-center pl-56 ">
        {/* go backward or forward button  */}
        <div className="flex gap-3 items-center w-full justify-end ">
          <Link
            className={`p-1 select-none bg-black text-white rounded ${
              !hasPrevPage &&
              "opacity-50 cursor-not-allowed pointer-events-none"
            }`}
            aria-disabled={!hasPrevPage}
            href={`?page=${page > 1 && page - 1}`}
          >
            Previous
          </Link>

          <div>
            {page} /{Math.ceil(itemsLength / per_page)}
          </div>

          <Link
            className={`p-1 select-none bg-black text-white rounded
        ${!hasNextPage && "opacity-50 cursor-not-allowed pointer-events-none"}`}
            href={`?page=${page + 1}`}
          >
            Next
          </Link>
        </div>
        <Suspense fallback={<Skeleton/>}>
          <Product slicedItems={slicedItems} />
        </Suspense>
      </section>
    </>
  );
}
