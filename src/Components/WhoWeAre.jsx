import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import image1 from "../assets/images/Staff1.jpg";
import image2 from "../assets/images/Staff2.jpg";
import image3 from "../assets/images/Staff3.jpg";
import image4 from "../assets/images/Staff4.jpg";

const WhoWeAre = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.05 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <div
        className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden lg:justify-between lg:gap-5"
        id="aboutUs"
      >
        <motion.div
          className="lg:flex lg:flex-col text-[#A49696] lg:px-10 lg:items-left lg:justify-center lg:w-[40vw]"
          ref={ref1}
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="lg:font-Soligant text-[3.5rem] mt-10 lg:mt-0 text-center lg:text-left lg:text-[8rem]">
            Who&nbsp;Are
            <br /> We
          </h1>
          <p className="font-Soligant text-[1.2rem] lg:px-2 px-8 text-center lg:text-left lg:text-[1.5rem] font-light">
            At Lolins Hair Salon, we are a dynamic team of passionate
            professionals committed to delivering exceptional, personalized hair
            care for every client.
          </p>
        </motion.div>

        <motion.div
          className="lg:flex lg:flex-wrap lg:flex-row lg:justify-center lg:items-center lg:gap-6 lg:content-center"
          ref={ref2}
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="w-auto h-[200px] md:h-[450px] m-6 lg:m-0 lg:w-[28vw] lg:h-[40vh] rounded-[15px] lg:rounded-[10px] overflow-hidden"
            ref={ref2}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={image1}
              alt="image1"
              className="object-cover w-full h-full lg:hover:scale-110 lg:transition-all lg:duration-500"
            />
          </motion.div>
          <motion.div
            className="w-auto h-[200px] md:h-[450px] m-6 lg:m-0 lg:w-[28vw] lg:h-[40vh] rounded-[15px] lg:rounded-[10px] overflow-hidden"
            ref={ref2}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={image2}
              alt="image1"
              className="object-cover w-full h-full lg:hover:scale-110 lg:transition-all lg:duration-500"
            />
          </motion.div>
          <motion.div
            className="w-auto h-[200px] md:h-[450px] m-6 lg:m-0 lg:w-[28vw] lg:h-[40vh] rounded-[15px] lg:rounded-[10px] overflow-hidden"
            ref={ref2}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={image3}
              alt="image1"
              className="object-cover w-full h-full lg:hover:scale-110 lg:transition-all lg:duration-500"
            />
          </motion.div>
          <motion.div
            className="w-auto h-[200px] md:h-[450px] m-6 lg:m-0 lg:w-[28vw] lg:h-[40vh] rounded-[15px] lg:rounded-[10px] overflow-hidden"
            ref={ref2}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={image4}
              alt="image1"
              className="object-cover w-full h-full lg:hover:scale-110 lg:transition-all lg:duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default WhoWeAre;
