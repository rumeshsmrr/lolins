import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import img from "../assets/images/services section image.png";

export default function WhatWeOffer() {
  const controls = useAnimation();
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const startScroll = windowHeight * 0.85; // Start scaling after 20% of the viewport height
    const scaleMultiplier = 4; // Slower scaling (lower factor)

    if (scrollPosition > startScroll && scrollPosition < windowHeight) {
      // Calculate scale based on adjusted scroll range
      const newScale =
        1 +
        ((scrollPosition - startScroll) / (windowHeight - startScroll)) *
          scaleMultiplier;
      setScale(newScale);
    } else if (scrollPosition >= windowHeight) {
      setScale(1 + scaleMultiplier); // Max scale
    } else {
      setScale(1); // Default scale
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-fit my-10 md:my-0 md:h-screen bg-primary relative flex justify-center items-center overflow-hidden">
      {/* Outer Circle */}
      <motion.div
        className="bg-slate-200 rounded-full w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] m-auto flex justify-center items-center relative z-0"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        {/* Inner Circle */}
        <div className="rounded-full w-[55vw] h-[55vw] md:w-[25vw] md:h-[25vw] m-auto relative z-0 bg-primary"></div>
      </motion.div>

      {/* Content */}
      <div className="absolute z-10 flex justify-center flex-col items-center p-6 gap-2">
        <h1 className="text-secondary-100 text-center text-5xl md:text-[10rem] tracking-wider font-primaryFont">
          What we Offer
        </h1>
        <p className="text-primaryText leading-5 text-sm md:text-xl text-center">
          At our salon, we don’t just style hair <br />– <br />
          we craft confidence.
        </p>
      </div>

      {/* Placeholder for next component */}
      {/* <div className="absolute top-[200vh] w-full h-screen bg-secondary flex justify-center items-center">
        <h2 className="text-primary text-2xl">Next Component Here</h2>
      </div> */}
    </div>
  );
}
