"use client"
import Products from "@/components/ui/Products";
import Navigation from "@/components/ui/nav";
import Recommended from "@/components/ui/reccomended";
import Sidebar from "@/components/ui/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <Navigation />

      <Sidebar />

      <Recommended />
      <Products />
    </>
  );
}
