"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
const SearchBar = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  // const params = useSearchParams();

  useEffect(() => {
    if (text.length > 0) {
      router.push(`?search=${text}`, {
        scroll: false,
      });
    }
  }, [text, router]);
  const handleSearchParams = useCallback((debounceValue: string) => {
    let params = new URLSearchParams(window.location.search);
    if (debounceValue.length > 0) {
      params.set("search", debounceValue);
    } else {
      params.delete("search");
    }
  }, []);
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
