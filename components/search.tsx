"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
const SearchBar = ({ search }: { search?: string }) => {
  const [text, setText] = useState("");
  const router = useRouter();
  const initialRender = useRef(true);
  // const params = useSearchParams();
  const [query] = useDebounce(text, 500);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    // if (!query) {
    //   router.push("/", {
    //     scroll: false,
    //   });
    // } else {
    //   router.push(`?search=${query}`, {
    //     scroll: false,
    //   });
    // }
  }, [query, router]);

  return (
    <div className="flex items-center ring-2  bg-slate-50 rounded-lg overflow-hidden ring-slate-400 px-1">
      <input
        type="search"
        className="bg-slate-50  p-1 focus:outline-none rounded-lg placeholder:text-sm placeholder:text-slate-400/80"
        placeholder="search products here..."
        onChange={(e) => setText(e.target.value)}
      />
      <Search className="cursor-pointer" />
    </div>
  );
};

export default SearchBar;
