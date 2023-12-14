"use client";
import { ShoppingBagIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search";
const Navigation = () => {
  return (
    <nav className="w-full bg-white text-black relative z-20 shadow-md">
      <header className="container mx-auto flex items-center justify-between">
        <Link href="/" className="logo">
          {/* //logo section */}
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="logo"
            className="object-cover"
          />
        </Link>

        <SearchBar />
        <div className="icons flex items-center gap-4">
          <Link href="/users" className="text-base underline underline-offset-2 font-medium">Users</Link>
          <ShoppingBagIcon />
          <User />
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
