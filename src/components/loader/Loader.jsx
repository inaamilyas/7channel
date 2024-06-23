import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-24 h-24 rounded-full animate-spin border-x-4 border-dashed border-[#000000] border-t-transparent"></div>
    </div>
  );
}

export default Loader;
