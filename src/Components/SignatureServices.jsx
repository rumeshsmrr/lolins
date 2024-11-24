import img1 from "../assets/images/Color.jpg";
import img2 from "../assets/images/Cut.jpg";
import img3 from "../assets/images/Treatement.jpg";
import img4 from "../assets/images/Event.jpg";
import { motion } from "framer-motion";

export default function SignatureServices() {
  return (
    <div className="bg-primary text-white h-fit p-10 md:p-20 mb-10 relative font-primaryFont overflow-hidden">
      {/* Container for entire component */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 justify-between"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title Section */}
        <div className="flex-1 md:flex-none">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-light leading-tight"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Signature <br /> services
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col gap-4 items-end sm:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="rounded-lg w-fit flex flex-col items-end">
            <img
              src={img1}
              alt="Color Alchemy"
              className="w-full md:w-4/5 rounded-lg"
            />
          </div>

          <div className="text-right flex flex-col items-end">
            <h2 className="text-2xl md:text-4xl font-bold">Color Alchemy</h2>
            <p className="w-3/4 ">
              From subtle highlights to bold transformations
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Luxury Treatments */}
      <motion.div
        className="flex flex-col gap-4 sm:w-1/2 sm:pr-8 mt-11 items-center sm:items-start relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="rounded-lg w-fit">
          <img
            src={img3}
            alt="Luxury Treatments"
            className="w-fit  md:w-4/5 rounded-lg"
          />
        </div>
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-bold">Luxury Treatments</h2>
          <p className="w-3/4">
            Repair, rejuvenate, and indulge with our deep conditioning and scalp
            therapies
          </p>
        </div>
      </motion.div>

      {/* Event Styling */}
      <motion.div
        className="w-full flex justify-end mt-20 sm:h-[300px] relative"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="flex flex-col gap-4 sm:w-1/2   self-end items-end sm:pr-8">
          <div className="rounded-lg w-fit flex flex-col items-end">
            <img
              src={img4}
              alt="Event Styling"
              className="w-fit  md:w-4/5 rounded-lg"
            />
          </div>
          <div className="text-right flex flex-col items-end">
            <h2 className="text-2xl md:text-4xl font-bold">Event Styling</h2>
            <p className="w-3/4 ">
              Glamorous updos, waves, or sleek finishes for your special moments
            </p>
          </div>
        </div>
      </motion.div>

      {/* Custom Cuts */}
      <motion.div
        className="flex flex-col sm:flex-row mt-20 justify-between sm:relative sm:-top-[200px] sm:h-[350px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="flex flex-col h-fit sm:w-1/2">
          <div className="flex flex-col gap-4 items-start sm:pr-8 relative">
            <div className="rounded-lg w-fit md:w-4/5">
              <img src={img2} alt="Custom Cuts" className="w-full rounded-lg" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl mt-2 font-bold">Custom Cuts</h2>
            <p className="w-3/4">
              Tailored to your personality, lifestyle, and unique features
            </p>
          </div>
        </div>

        {/* Book an Appointment Button */}
        <motion.div
          className="flex justify-center mt-20 sm:absolute sm:bottom-[0px] right-0"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.a
            href="#"
            className="cta relative inline-block px-10 py-5 rounded-full bg-white overflow-hidden"
            whileHover="hover"
            initial="initial"
            animate="initial"
          >
            <motion.div
              className="absolute top-0 left-0 rounded-full h-full w-14 bg-assent transition-all ease-out duration-300"
              variants={{
                initial: { width: "56px" },
                hover: { width: "100%" },
              }}
            ></motion.div>

            <span className="relative text-sm sm:text-3xl text-black font-bold uppercase tracking-wider">
              Book an Appointment
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
