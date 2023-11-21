import { Search, ShoppingBagIcon, User } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="w-full bg-white text-black relative z-20 shadow-md">
      <header className="container mx-auto flex items-center justify-between">
        <div className="logo">
          {/* //logo section */}
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="logo"
            className="object-contain aspect-square"
          />
        </div>
        <div className="flex items-center ring-2  bg-slate-50 rounded-lg overflow-hidden ring-slate-400 px-1">
          <input
            type="search"
            className="bg-slate-50  p-1 focus:outline-none rounded-lg placeholder:text-sm placeholder:text-slate-400/80"
            placeholder="search products here..."
          />
          <Search className="cursor-pointer" />
        </div>

        <div className="icons flex items-center gap-4">
          <ShoppingBagIcon />
          <User />
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
