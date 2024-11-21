import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../assets/images/logo_name_black_bg.png";

const Footer = () => {
  return (
    <footer className="bg-primary011 p-8 rounded-t-lg">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="mb-8 lg:mb-0 w-full md:w-1/2 flex flex-col md:flex-row items-center  text-primaryText lg:items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="text-3xl font-primaryFont text-textPrimary011 mb-4  text-primaryText  text-center md:text-start"> */}
          <img src={logo} className="w-28 md:w-40" />
          {/* </div> */}
          <p className="mb-4 w-full lg:w-3/5 text-center lg:text-start">
            Lolins Hair Salon is a chic, expert space where your hair is
            transformed with personalized care and style.
          </p>
        </motion.div>

        <motion.nav
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="flex w-full md:pl-7  text-primaryText text-[1.3rem]  text-nowrap justify-center md:justify-between flex-row space-y-0 space-x-4 md:space-x-8 md:pr-14 ">
            {["Services", "About Us"].map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="w-full md:pl-7 mt-10 text-primaryText flex justify-between">
            <div className="mb-0">
              <h2 className="text-textPrimary011 font-stylishBold text-[1.3rem] mb-4">
                Opening Hours
              </h2>
              {/* <p className="text-textSecondary011">+1 (999) 888-77-66</p>
              <p className="text-textSecondary011">hello@kayujati.com</p> */}
              <ul>
                <li className="flex w-36 justify-between">
                  <div>MON: </div>
                  <div>9am - 10pm</div>
                </li>
                <li className="flex w-36 justify-between">
                  <div>MON: </div>
                  <div>9am - 10pm</div>
                </li>
                <li className="flex w-36 justify-between">
                  <div>TUE: </div>
                  <div>9am - 10pm</div>
                </li>
                <li className="flex w-36 justify-between">
                  <div>WED: </div>
                  <div>9am - 10pm</div>
                </li>
                <li className="flex w-36 justify-between">
                  <div>THU: </div>
                  <div>9am - 10pm</div>
                </li>
                <li className="flex w-36 justify-between">
                  <div>FRI: </div>
                  <div>9am - 10pm</div>
                </li>
              </ul>
            </div>
            <div className="mb-0">
              <h2 className="text-textPrimary011 font-stylishBold text-[1.3rem] mb-4">
                Contact Us
              </h2>
              <p className="text-textSecondary011">+078 215 3647</p>
              <p className="text-textSecondary011">hello@lolins.com</p>
            </div>
          </div>
        </motion.nav>
      </motion.div>

      <motion.div
        className="container mx-auto  text-primaryText  flex flex-col-reverse md:flex-row justify-between gap-16 items-end mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-between items-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row space-y-4 items-end gap-4">
            <div className="flex flex-col space-y-4">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaLinkedin />, label: "LinkedIn" },
                { icon: <FaTiktok />, label: "TikTok" },
              ].map((button, index) => (
                <motion.button
                  key={index}
                  className="w-10 h-10 rounded-full bg-slate-200 text-black  flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={button.label}
                >
                  {button.icon}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              {[
                { icon: <FaXTwitter />, label: "Twitter" },
                { icon: <FaInstagram />, label: "Instagram" },
              ].map((button, index) => (
                <motion.button
                  key={index}
                  className="w-10 h-10 rounded-full bg-slate-200 text-black flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={button.label}
                >
                  {button.icon}
                </motion.button>
              ))}
            </div>
          </div>

          <p className="text-sm text-textSecondary011 mt-6">
            © 2024 — Copyright <br /> All Rights reserved
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-full md:space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex justify-between">
            <div className="m-0">
              <h2 className="text-textPrimary011 font-stylishBold text-[1.3rem] mb-4">
                Location
              </h2>
              <p className="">
                202 Beauty Block, <br />
                Corner of 5th Main, <br />
                South Beach, Miami, 33139
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
