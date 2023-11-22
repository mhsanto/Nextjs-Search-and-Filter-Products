import items from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  params: {
    productId: string;
  };
};

const ProductPage = ({ searchParams, params: { productId } }: ProductProps) => {
  const selectedColor = (searchParams.color || "white>>") as string;
  const selectedSize = (searchParams.size || "sm") as string;

  // code for client component
  // const searchParams = useSearchParams();
  // const [selectedColor, setSelectedColor] = useState("black");
  // const [selectedSize, setSelectedSize] = useState("md");
  // const selectedSize = searchParams.get("size");
  // const selectedColor = searchParams.get("color");
  // useEffect(() => {
  //   router.push(`?color=${selectedColor}&size=${selectedSize}`, {
  //     scroll: false,
  //   });
  // }, [selectedColor, selectedSize, router]);

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

  return (
    <div className="flex justify-center w-max mx-auto px-7 py-5 bg-slate-200/50 rounded gap-6 mt-7">
      {/* //product image */}
      <div className="">
        {item.images && images ? (
          <Image
            src={images[selectedColor as keyof typeof images]}
            alt={title || ""}
            width={450}
            height={700}
            className="rounded-lg h-auto w-auto shadow-md object-cover"
          />
        ) : (
          <Image
            src={img}
            alt={title || ""}
            width={450}
            height={700}
            className="rounded-lg h-auto w-auto  shadow-md object-contain aspect-square"
          />
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
            <Link
              href={`?${new URLSearchParams({
                color: selectedColor,
                size: item,
              })}`}
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
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {color.map((c, i) => (
            <Link
              href={`?${new URLSearchParams({
                color: c,
                size: selectedSize,
              })}`}
              className={`bg-gray-100 px-4 py-1 rounded-full ring-2`}
              style={
                selectedColor === "white" && c === "white"
                  ? {
                      backgroundColor: `${c}`,
                      color: "black",
                      border: "2px solid #000",
                    }
                  : selectedColor === c
                  ? {
                      backgroundColor: `${c}`,
                      color: "white",
                      border: "2px solid transparent",
                    }
                  : {
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid transparent",
                    }
              }
              key={i}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Link>
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
