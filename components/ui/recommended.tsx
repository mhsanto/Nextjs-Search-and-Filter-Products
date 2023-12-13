"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type RecommendedProps = {
  search?: string;
  page?: number;
};
const recommendations = [
  {
    id: 4,
    name: "All",
    url: "all",
  },
  {
    id: 43,
    name: "Sandals",
    url: "Sandals",
  },
  {
    id: 1,
    name: "Sneakers",
    url: "sneakers",
  },
  {
    id: 2,
    name: "Heels",
    url: "Heels",
  },
  {
    id: 3,
    name: "Flats",
    url: "flats",
  },
];

const Recommended: React.FC<RecommendedProps> = ({search,page}) => {
  const searchParams = useSearchParams();
  const current = searchParams.get("rec") ?? "all";

  return (
    <div className="my-3 flex justify-center">
      <ul className="flex gap-3 ">
        {recommendations.map((item) => (
          <Link
            href={{
              pathname: "/",
              query: {
                ...(search || page ? { search, page } : {}),
                rec: item.url,
              },
            }}
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
