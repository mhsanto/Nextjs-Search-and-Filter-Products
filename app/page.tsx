import Recommended from "@/components/ui/recommended";
import Sidebar from "@/components/ui/sidebar/sidebar";
import Product from "@/components/Product";

import items from "@/lib/data";
import { Suspense } from "react";
import Skeleton from "./skeleton";
import Pagination from "./components/pagination";
import InfiniteScroll from "@/components/infinite-scroll";
import { Product as ProductsType } from "@/type";
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
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const recommendationProducts =
    typeof searchParams.rec === "string" ? searchParams.rec : "all"!;
  //mocked skipped and limited in the real app
  const start = (page - 1) * per_page;
  const end = start + per_page; // 5,10,15
  const slicedItems = items.slice(start, end);
  const itemsLength = items.length;
  const hasPrevPage = start > 0;
  const hasNextPage = end < items.length;

  // filter products using search query
  const recommendations: ProductsType[] =
    recommendationProducts ===  "all" 
      ? slicedItems
      : items.filter((item) =>
          item.category
            .toLowerCase()
            .includes(recommendationProducts?.toLowerCase())
        );



  return (
    <>
      <Sidebar />
      <Recommended search={search} page={page} />
      {/* PAGINATION BUTTON */}
      <section className="w-[90%] mx-auto my-3 pr-0 flex flex-wrap gap-7 justify-center items-center pl-56 relative">
        {/* go backward or forward button  */}

        <Pagination
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
          page={page}
          itemsLength={itemsLength}
          per_page={per_page}
          search={search}
        />
        <Suspense fallback={<Skeleton />}>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-7 justify-center">
            <Product item={recommendations} />
          </div>
        </Suspense>
        {/* <InfiniteScroll /> */}
      </section>
    </>
  );
}
// const filteredItems: ProductsType[] = search
//   ? items.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     )
//   : slicedItems;
