import Link from "next/link";
type PaginationProps = {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  per_page: number;
  itemsLength: number;
  page: number;
};
const Pagination: React.FC<PaginationProps> = ({
  hasPrevPage,
  hasNextPage,
  itemsLength,
  per_page,
  page,
}) => {
  return (
    <>
      <div className="flex gap-3 items-center w-full justify-end ">
        <Link
          className={`p-1 select-none bg-black text-white rounded ${
            !hasPrevPage && "opacity-50 cursor-not-allowed pointer-events-none"
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
    </>
  );
};

export default Pagination;
