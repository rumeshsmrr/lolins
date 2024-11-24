import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import cardimg from "../assets/images/CardImage.png";

const ImageTile = () => {
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <>
      <div className="flex flex-col justify-center items-center h-auto lg:h-[100vh] py-5 overflow-hidden">
        <motion.h1
          className="font-Soligant px-10 text-center text-[2.2rem] lg:text-[4rem] text-[#A49696] mb-3"
          ref={ref2}
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView2
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A glimpse of
          <br className="block lg:hidden md:hidden" /> our
          <br className="block lg:hidden" /> hair salon
        </motion.h1>
        <motion.div
          className="mx-5 mt-8 lg:mt-0 lg:w-[70vw] lg:h-auto rounded-[10px]  overflow-hidden"
          ref={ref2}
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView2
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={cardimg}
            alt="Card image"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ImageTile;
