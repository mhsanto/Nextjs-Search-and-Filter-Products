import React from "react";

const YourComponent = () => {
  return (
    <div className="flex flex-wrap animate-pulse  gap-7 w-max-[90%] mx-auto items-center">
      {[...Array(6)].map((_, i) => (
        <div
          className="relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm duration-500 w-[300px]  flex flex-col"
          key={i}
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "500ms" }}
        >
          <div className="flex ">
            <div className="w-full h-[200px] rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col  px-3 justify-start truncate rounded-xl bg-white  gap-3 py-3">
            <div className="h-5 w-[70%] rounded-md bg-gray-300 self-start" />
            <div className="flex gap-4">
              <div className="h-5 w-16 rounded-md bg-gray-300" />
              <div className="h-5 w-16 rounded-md bg-gray-300" />
            </div>
            <div className="h-5 w-[100%] rounded-md bg-gray-300 py-4 px-3 flex items-center justify-end">
              <div className="h-6 w-7 aspect-square rounded-md bg-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
