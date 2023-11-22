"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const SearchBar = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.push(`?search=${text}`, {
      scroll: false,
    });
  }, [text, router]);
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
