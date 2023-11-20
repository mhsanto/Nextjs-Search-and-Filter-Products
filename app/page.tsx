import Products from "@/components/ui/Products";
import Navigation from "@/components/ui/nav";
import Recommended from "@/components/ui/reccomended";
import { Sidebar } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grid__design">
        <div className="">
          <Sidebar />
        </div>
        <div className=" ">
          <Recommended />
          <Products />
        </div>
      </div>
    </>
  );
}
