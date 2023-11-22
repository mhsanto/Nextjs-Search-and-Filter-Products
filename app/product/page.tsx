import Product from "@/components/Product";
import PaginationControls from "@/components/pagination-controls";
import items from "@/lib/data";
import Link from "next/link";
type ProductsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
const ProductsPage: React.FC<ProductsProps> = ({ searchParams }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const per_page =
    typeof searchParams.per_page === "string"
      ? Number(searchParams.per_page)
      : 4;
  //mocked skipped and limited in the real app
  const start = (page - 1) * per_page;
  const end = start + per_page; // 5,10,15
  const slicedItems = items.slice(start, end);
  const itemsLength = items.length;
  const hasPrevPage = start > 0;
  const hasNextPage = end < items.length;

  console.log(itemsLength);
  return (
    <section className="w-[90%] gap-2 mx-auto my-3 pr-0 flex flex-wrap justify-center ">
      {/* <PaginationControls
        hasNextPage={end < items.length}
        hasPrevPage={start > 0}
        length={itemsLength}
      /> */}
      <div className="flex gap-3 items-center w-full justify-end ">
        <Link
          className={`p-1 select-none bg-black text-white rounded ${
            !hasPrevPage && "opacity-50 cursor-not-allowed pointer-events-none"
          }`}
          aria-disabled={!hasPrevPage}
          href={`product?page=${page > 1 && page - 1}`}
        >
          Previous
        </Link>

        <div>
          {page} /{Math.ceil(itemsLength / per_page)}
        </div>

        <Link
          className={`p-1 select-none bg-black text-white rounded
        ${!hasNextPage && "opacity-50 cursor-not-allowed pointer-events-none"}`}
          href={`product?page=${page + 1}`}
        >
          Next
        </Link>
      </div>
      {slicedItems.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsPage;
