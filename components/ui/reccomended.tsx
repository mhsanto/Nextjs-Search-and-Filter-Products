const Recommended = () => {
  return (
    <div className="my-3 flex justify-center">
      <ul className="flex gap-3 ">
        <button className="bg-white text-black px-3 py-1 rounded">ALL</button>
        <button className=" ring-white text-white ring-2 px-3 py-1 rounded">
          Nike
        </button>
        <button className=" ring-white text-white ring-2  px-3 py-1 rounded">
          Pume
        </button>
        <button className=" ring-white text-white ring-2 px-3 py-1 rounded">
          Adidas
        </button>
      </ul>
    </div>
  );
};

export default Recommended;
