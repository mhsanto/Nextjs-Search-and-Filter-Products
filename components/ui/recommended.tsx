"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const recommendations = [
  {
    id: 4,
    name: "All",
    url: "all",
  },
  {
    id: 1,
    name: "Nike",
    url: "nike",
  },
  {
    id: 2,
    name: "Puma",
    url: "puma",
  },
  {
    id: 3,
    name: "Adidas",
    url: "adidas",
  },
];

const Recommended = () => {
  const searchParams = useSearchParams();
  const current = searchParams.get("rec") ?? "all";

  return (
    <div className="my-3 flex justify-center">
      <ul className="flex gap-3 ">
        {recommendations.map((item) => (
          <Link
            href={`/?rec=${item.url}`}
            key={item.id}
            className={`px-3 py-1 w-20 flex items-center  justify-center select-none rounded ring-2 cursor-pointer${
              current === item.url ? " bg-black text-white " : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
