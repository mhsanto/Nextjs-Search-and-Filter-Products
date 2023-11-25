"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import items from "@/lib/data";
import { Product as ProductType } from "@/type";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Product from "./Product";
let page = 2;
const InfiniteScroll = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const delay = 500;
      const timeoutId = setTimeout(() => {
        setData(items.slice(0, page * 6));
        page++;
        setIsLoading(false);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);
  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
        </div>
      </section>
    </>
  );
};

export default InfiniteScroll;
