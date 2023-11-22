const Recommended = () => {
  return (
    <div className="my-3 flex justify-center">
      <ul className="flex gap-3 ">
        <button className="bg-black text-white px-3 py-1 rounded">ALL</button>
        <button className=" ring-black text-black ring-1 px-3 py-1 rounded">
          Nike
        </button>
        <button className=" ring-black text-black ring-1  px-3 py-1 rounded">
          Pume
        </button>
        <button className=" ring-black text-black ring-1 px-3 py-1 rounded">
          Adidas
        </button>
      </ul>
    </div>
  );
};

export default Recommended;
