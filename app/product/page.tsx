import Product from "@/components/Product";
import PaginationControls from "@/components/pagination-controls";
import items from "@/lib/data";
type ProductsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
const ProductsPage: React.FC<ProductsProps> = ({ searchParams }) => {
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "4";
  //mocked skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page); // 5,10,15
  const slicedItems = items.slice(start, end);

  return (
    <section className="w-[90%] gap-2 mx-auto my-2 pl-60 pr-0 flex flex-wrap justify-between ">
      <PaginationControls
        hasNextPage={end < items.length}
        hasPrevPage={start > 0}
      />
      {slicedItems.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsPage;
