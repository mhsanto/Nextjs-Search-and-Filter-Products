"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
}: {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "4";
  return (
    <div className="flex items-center gap-3 justify-end w-full mt-5">
      <button
        className={`p-1 select-none bg-black text-white rounded ${
          !hasPrevPage && "opacity-50 cursor-not-allowed"
        }`}
        onClick={() =>
          router.push(`?page=${Number(page) - 1}&per_page=${per_page}`)
        }
        disabled={!hasPrevPage}
      >
        Previous
      </button>
      <div>
        {page} / {Math.ceil(25 / Number(per_page))}
      </div>
      <button
        className={`p-1 select-none bg-black text-white rounded
        ${!hasNextPage && "opacity-50 cursor-not-allowed"}`}
        onClick={() =>
          router.push(`?page=${Number(page) + 1}&per_page=${per_page}`)
        }
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
