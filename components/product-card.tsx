import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

import { Product } from "@/app/products/page";

export function ProductCard(product: Product) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const url = new URL(pathname ? pathname : "", "http://localhost:3000");

  url.searchParams.set("modal", "true");
  url.searchParams.set("id", product.id.toString());

  return (
    <div className="max-w-max rounded-lg overflow-hidden bg-green-900 shadow-md flex flex-col ">
      <Link
        className="aspect-square h-[300px] flex justify-center w-full relative bg-slate-50 border-zinc-300 rounded-t-lg"
        href={url.toString()}
        scroll={false}
      >
        <Image
          alt="Product image"
          className="object-contain py-4"
          src={product.image}
          width={250}
          height={150}
          priority={true}
          loading="eager"
        />
      </Link>
      <div className="px-5 gap-3.5 py-4 flex-grow relative flex flex-col space-y-4">
        <div className="font-bold  text-white text-xl ">
          <p> {product.title.substring(0, 25)}...</p>
        </div>
        <p className="text-zinc-200 max-w-[30ch] text-base ">
          {product.description.substring(0, 75)}...
        </p>
        <div className="flex gap-2 whitespace-nowrap flex-wrap">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900 ">
            {product.category}
          </span>

          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900">
            👥 {product.rating.count} Reviews
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900">
            ⭐ {product.rating.rate}
          </span>
        </div>
        <div className="flex-grow flex items-end">
          <div className="flex items-center  justify-between gap-5 w-full">
            <div className="text-xl text-lime-500 font-bold">
              ${product.price}
            </div>
            <Link
              className="border-lime-300 border-2 justify-center flex text-center w-full  rounded px-3 py-2 text-lime-300  hover:bg-white transition-colors duration-300 hover:text-zinc-900  hover:border-zinc-900"
              href={url.toString()}
              scroll={false}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
