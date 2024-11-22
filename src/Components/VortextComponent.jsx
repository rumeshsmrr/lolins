import React from "react";
import { Vortex } from "../ui/Vortex";

const VortextComponent = () => {
  return (
    <div className="relative w-full h-[300px] bg-[#161616]">
      <Vortex
        backgroundColor="#161616"
        particleCount={1000}
        rangeY={800}
        baseHue={366} // not using now
        rangeHue={10}
        className="flex items-center justify-center h-full"
      >
        <div className="text-center">
          <h1 className="text-secondary-100 p-2 text-5xl md:text-6xl  font-bold">
            Your hair would love us
          </h1>
        </div>
      </Vortex>
    </div>
  );
};

export default VortextComponent;
