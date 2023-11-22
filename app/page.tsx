"use client";
import Products from "@/components/ui/Products";
import Recommended from "@/components/ui/recommended";
import Sidebar from "@/components/ui/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />

      <Recommended />
      <Products />
    </>
  );
}
