"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
  length,
}: {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  length?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page =
    typeof searchParams.get("page") === "string"
      ? Number(searchParams.get("page"))
      : 1;
  const per_page =
    typeof searchParams.get("per_page") === "string"
      ? Number(searchParams.get("per_page"))
      : 4;
  return (
    <div className="flex items-center gap-3 justify-end w-full mt-5">
      <button
        className={`p-1 select-none bg-black text-white rounded ${
          !hasPrevPage && "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => router.push(`?page=${page - 1}&per_page=${per_page}`)}
        disabled={!hasPrevPage}
      >
        Previous
      </button>
      <div>
        {page} /{length && Math.ceil(length / per_page)}
      </div>
      <button
        className={`p-1 select-none bg-black text-white rounded
        ${!hasNextPage && "opacity-50 cursor-not-allowed"}`}
        onClick={() => router.push(`?page=${page + 1}&per_page=${per_page}`)}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
