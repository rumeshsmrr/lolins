import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import img1 from "../assets/images/Landing_Images/Walpaper1.png";
import img2 from "../assets/images/Landing_Images/Walpaper2.png";
import img3 from "../assets/images/Landing_Images/Walpaper3.png";
import img4 from "../assets/images/Landing_Images/Walpaper4.png";
import img5 from "../assets/images/Landing_Images/Walpaper5.png";
import img6 from "../assets/images/Landing_Images/Walpaper6.png";
import Arrow_Icon from "../assets/images/Arrow_Icon.png";

const String_Data = [
  {
    par: "Cuts, styles, and treatments crafted with unparalleled expertise.",
    par2: "A refined collection of services where modern techniques are elevated by luxurious, personalized care.",
  },
  {
    par: "Experience the art of beauty with our expertly trained stylists and technicians",
    par2: "Will will guide you through a bespoke journey tailored to your unique needs and desires.",
  },
  {
    par: "From classic cuts to avant-garde styles,",
    par2: "Our team of skilled professionals will work with you to create a look that's as unique as you are.",
  },
];

function Content_Switch() {
  const [active, setActive] = React.useState(0);

  const handleSwitch = (direction) => {
    setActive((prev) =>
      direction === "up"
        ? (prev + 1) % String_Data.length
        : (prev - 1 + String_Data.length) % String_Data.length
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % String_Data.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Landing active={active} onSwitch={handleSwitch} />
    </>
  );
}

const Landing = ({ active, onSwitch, isSliding }) => {
  const Landscape_images = [img1, img4, img5];
  const Porttrait_images = [img6, img3, img2];
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <Navbar />
      <div className="lg:flex flex-col lg:flex-row w-full lg:overflow-hidden ">
        <div className="relative h-[50vh] lg:h-screen lg:w-full overflow-hidden">
          <div
            className="flex flex-col h-full transition-transform duration-500"
            style={{
              transform: `translateY(-${active * 100}%)`, // Translate based on active index
            }}
          >
            {/* Carousel Images */}
            {Landscape_images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="h-full w-auto  lg:h-screen lg:w-full object-cover"
              />
            ))}
          </div>
        </div>

        <div className="relative lg:hidden h-[50vh] lg:h-screen lg:w-full overflow-hidden">
          <div
            className="flex flex-col h-full transition-transform duration-500"
            style={{
              transform: `translateY(-${
                active == 0 ? 2 * 100 : 200 - active * 100
              }%)`, // Translate based on active index
            }}
          >
            {/* Carousel Images */}
            {Porttrait_images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="h-full lg:h-screen top-0 lg:w-full object-cover object-top"
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:relative h-[50vh] w-full lg:h-screen lg:w-[40vw] overflow-hidden ">
          <div
            className="flex flex-col h-full lg:h-full transition-transform duration-500 "
            style={{
              transform: `translateY(-${
                active == 0 ? 2 * 100 : 200 - active * 100
                // active == 0 ? 2 * 100 : 200 - active * 100
              }%)`,
            }}
          >
            {/* Carousel Images */}
            {Porttrait_images.map((img, index) => (
              <div className="">
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index}`}
                  className="object-cover h-full w-full lg:pt-[100px]  lg:h-[100vh]"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute h-full w-min top-0 left-4 flex lg:justify-start overflow-hidden lg:h-[100vh] lg:left-10  lg:w-[40vw]"
          ref={ref1}
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-[18rem] mt-[0vh]  lg:text-[46rem] lg:-mt-[15vh] text-[#e7e5d9a3] z-0 select-none">
            L
          </span>
        </motion.div>

        <ScrollCard onSwitch={onSwitch} active={active} />
      </div>
    </>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <ul className="absolute flex flex-row lg:flex-row lg:justify-center lg:gap-28 lg:text-[20px] lg:py-2 items-start justify-between px-4 py-2 lg:items-center w-full text-white bg-[#16161680] backdrop-blur-[10px] z-10 lg:backdrop-blur-[15px] lg:overflow-hidden lg:text-center">
        <li className="hidden lg:block lg:opacity-40 lg:hover:opacity-100 lg:hover:scale-110 lg:transition-all lg:duration-200">
          Home
        </li>
        <li className="hidden lg:block lg:opacity-40 lg:hover:opacity-100 lg:hover:scale-110 lg:transition-all lg:duration-200 ">
          Services
        </li>
        <li>
          <div className="flex flex-col group text-left lg:text-center ">
            <h1 className="text-[2.3rem] opacity-50 lg:text-[4rem] lg:opacity-50 lg:group-hover:opacity-100 lg:transition-all lg:duration-300">
              Lolins
            </h1>
            <p className="text-[0.6rem] ml-0.5 opacity-40 -mt-2 lg:-mt-5 lg:text-[15px] lg:opacity-40 lg:group-hover:opacity-100 lg:transition-all lg:duration-300">
              Hair Salon
            </p>
          </div>
        </li>
        <li className="hidden lg:block lg:opacity-40 lg:hover:opacity-100 lg:hover:scale-110 lg:transition-all lg:duration-200 ">
          About Us
        </li>
        <li className="hidden lg:block lg:opacity-40 lg:hover:opacity-100  lg:hover:scale-110 lg:transition-all lg:duration-200 ">
          Contact Us
        </li>
        <div className="relative self-center lg:hidden">
          {/* Burger Button */}
          <div
            className=" text-[25px] opacity-50 self-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "☰" : "✖"}
          </div>

          {/* Menu Box with Transition */}
          <div
            className={`absolute top-[50px] right-0 w-[130px] h-[155px] flex items-center justify-center bg-[#161616be] backdrop-blur-[10px] rounded-[20px] text-[#e7e5d9d0] shadow-lg p-4 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <ul className="font-thin text-[15px] text-center">
              <li className="mb-2">Home</li>
              <li className="mb-2">About</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </div>
      </ul>
    </>
  );
}

function ScrollCard({ onSwitch, active }) {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <div className="absolute flex flex-row lg:top-[25vh] lg:right-[20vw] right-0 top-[31vh] items-center overflow-hidden">
        <div className="lg:flex-grow-1 rounded-[5px] overflow-hidden">
          <button
            className="bg-[#161616] text-white w-12 lg:w-20 h-16 lg:h-20 flex items-center text-center justify-center cursor-none"
            onClick={() => onSwitch("up")}
          >
            <img src={Arrow_Icon} alt="Upward Arrow" className="w-[30px]" />
          </button>
          <button
            className="bg-[#161616] text-white w-12 lg:w-20 h-16 lg:h-20 flex items-center text-center justify-center cursor-none"
            onClick={() => onSwitch("down")}
          >
            <img
              src={Arrow_Icon}
              alt="Downward Arrow"
              className="rotate-180 w-[30px]"
            />
          </button>
        </div>

        <div className="relative bg-[#e7e5d9c9] backdrop-blur-xl h-[250px] w-[180px] lg:w-[300px] lg:px-8 text-center lg:h-[450px] justify-center lg:justify-center gap-10 text-[12px]  font-Viagram lg:text-[1.4rem] overflow-hidden flex flex-col items-center rounded-[2px] px-5">
          <motion.p
            key={`par1-${active}`}
            ref={ref1}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {String_Data[active].par}
          </motion.p>
          <motion.p
            key={`par2-${active}`}
            ref={ref1}
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView1
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {String_Data[active].par2}
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default Content_Switch;
