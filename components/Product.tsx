import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Skeleton from "@/app/skeleton";

type ProductProps = {
  slicedItems: Product[];
};

const Product: React.FC<ProductProps> = async ({ slicedItems }) => {
  const awaitItems = new Promise((resolve) => {
    setTimeout(() => {
      resolve(slicedItems);
    }, 5000);
  });
  const items:Product[] = await awaitItems;
  return (
    <>
      {items.map((item: any) => (
        <Link
          key={item.id}
          href={`${item.id}`}
          className="card max-w-fit flex-grow  bg-white text-black rounded-sm px-2 group overflow-hidden transition-all duration-300 cursor-pointer hover:ring-2 border-transparent"
        >
          <div className="card__image  overflow-hidden">
            <Image
              src={item.img}
              alt="product"
              height={300}
              width={300}
              className="object-contain aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="card__content py-3 flex flex-col gap-2">
            <h3 className="text-xl">{item.title}</h3>
            <p className="text-gray-600 ">
              <del>{item.prevPrice}</del> ${item.newPrice}
            </p>
            <button className="flex items-center gap-3 justify-between border-2 p-2 rounded-sm">
              Add to Cart
              <ShoppingBag />
            </button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Product;
