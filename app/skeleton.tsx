import React from "react";

const YourComponent = () => {
  return (
    <div className="flex flex-wrap ">
      {[...Array(6)].map((_, i) => (
        <div
          className="relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm animate-pulse duration-500 w-fit gap-4 flex flex-col"
          key={i}
        >
          <div className="flex ">
            <div className="h-44 w-52 rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col  px-3 justify-start truncate rounded-xl bg-white  gap-3 py-3">
            <div className="h-5 w-[70%] rounded-md bg-gray-300 self-start" />
            <div className="flex gap-4">
              <div className="h-5 w-16 rounded-md bg-gray-300" />
              <div className="h-5 w-16 rounded-md bg-gray-300" />
            </div>
            <div className="h-5 w-[100%] rounded-md bg-gray-300 py-4 px-3 flex items-center justify-end" >
                <div className="h-6 w-7 aspect-square rounded-md bg-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
