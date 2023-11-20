import Products from "@/components/ui/Products";
import Navigation from "@/components/ui/nav";
import Recommended from "@/components/ui/reccomended";

export default function Home() {
  return (
    <>
      <Navigation />
      <Products />
      <Recommended />
    </>
  );
}
