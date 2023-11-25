import Recommended from "@/components/ui/recommended";
import Sidebar from "@/components/ui/sidebar/sidebar";
import Product from "@/components/Product";

import items from "@/lib/data";
import { Suspense } from "react";
import Skeleton from "./skeleton";
import Pagination from "./components/pagination";
import InfiniteScroll from "@/components/infinite-scroll";
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
      <section className="w-[90%] mx-auto my-3 pr-0 flex flex-wrap gap-7 justify-center items-center pl-56 relative">
        {/* go backward or forward button  */}

        <Pagination
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
          page={page}
          itemsLength={itemsLength}
          per_page={per_page}
        />
        <Suspense fallback={<Skeleton />}>
          {slicedItems.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Suspense>
        <InfiniteScroll />
      </section>
    </>
  );
}
