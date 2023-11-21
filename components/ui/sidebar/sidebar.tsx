import CategorySection from "./category";
import ColorsSection from "./colors";
import Price from "./price";

const Sidebar = () => {
  return (
    <div className="bg-black text-white max-h-screen fixed min-h-screen w-60 top-0 flex flex-col pr-4 justify-center">
      <CategorySection />
      <Price />
      <ColorsSection />
    </div>
  );
};

export default Sidebar;
