import Image from "next/image";

const Products = () => {
  return (
    <section className="w-full my-2  grid_design_2 justify-center">
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
      <div className="card max-w-fit bg-white text-black rounded-sm px-2">
        <div className="card__image">
          <Image
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="product"
            width={250}
            height={250}
            className="object-contain aspect-[3/2]"
          />
        </div>
        <div className="card__content py-3 flex flex-col gap-2">
          <h3 className="text-xl">Nike Sport Shoe</h3>
          <p className="text-gray-600 "><del>$30</del> $20</p>
          <button className="border-2 p-2 rounded-sm">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
