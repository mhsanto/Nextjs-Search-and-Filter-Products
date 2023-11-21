import items from "@/lib/data";
import { channel } from "diagnostics_channel";
import Image from "next/image";

type ProductProps = {
  params: {
    productId: string;
  };
};

const ProductPage = ({ params: { productId } }: ProductProps) => {
  const item: Product | undefined = items.find((item) => item.id === productId);
  if (!item) return <h1>Product not found</h1>;
  const {
    img,
    title,
    images,
    size,
    star,
    prevPrice,
    newPrice,
    company,
    color,
  } = item;
  const selectedImage = "black";
  const selectedColor = "red";
  const selectedSize = "sm";
  return (
    <div className="flex justify-center w-max mx-auto px-7 py-5 bg-slate-200/50 rounded gap-6 mt-7">
      {/* //product image */}
      <div className="">
        {images && images[selectedImage] ? (
          <Image
            src={images[selectedImage]}
            alt={title || ""}
            width={450}
            height={700}
            className="rounded-lg shadow-md object-cover"
          />
        ) : (
          <p>Loading...</p>
          // You can replace this with any loading indicator or fallback content
        )}
      </div>
      <div className=" flex flex-col gap-4">
        {/* //product title */}
        <h3>{title}</h3>
        <p>
          <del>{prevPrice}</del> ${newPrice}
        </p>
        <p>{company}</p>

        <span className="flex">{Array(5).fill(star)}</span>

        <div className="flex gap-4">
          {size.map((item, i) => (
            <button
              className={` w-10 flex items-center justify-center h-10 rounded-full
              ${
                selectedSize === item
                  ? "bg-black text-white"
                  : "bg-white text-black ring-1 ring-slate-600"
              }
              `}
              key={i}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          {color.map((c, i) => (
            <button
              className={`bg-gray-100 px-4 py-1 rounded-full border-2`}
              style={
                selectedColor === c
                  ? {
                      backgroundColor: `${c}`,
                      border: "2px solid #000",
                      color: "white",
                    }
                  : {
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "normal",
                    }
              }
              key={i}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
        <button className="bg-black text-white px-4 py-1.5 rounded-md">
          Buy now{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
