import React from "react";
import { Vortex } from "../ui/Vortex";
import Footer from "./Footer";
const VortextComponent = () => {
  return (
    <div className="relative w-full bg-[#161616]">
      <Vortex
        backgroundColor="#161616"
        particleCount={5000}
        rangeY={2500}
        baseHue={366} // not using now
        rangeHue={10}
        className="flex flex-col items-center justify-center "
      >
        <Footer />
      </Vortex>
    </div>
  );
};

export default VortextComponent;
