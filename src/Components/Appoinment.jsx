import { useState, useEffect } from "react";
import React from "react";

import { motion } from "framer-motion"; // Importing motion for animations
import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS for toast

const Appointment = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleClearInput = () => {
    setInputValue("");
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
    setInputValue5("");
    setSelectedValue("");
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Name is required");
    } else if (!/^[a-zA-Z\s]+$/.test(inputValue.trim())) {
      setErrorMessage("Name must only contain letters and spaces");
    } else {
      setErrorMessage("");
    }
  };

  const handleBlur1 = () => {
    const phoneRegex = /^[0-9]{10}$/;

    if (inputValue1.trim() === "") {
      setErrorMessage1("Contact number is required");
    } else if (!phoneRegex.test(inputValue1.trim())) {
      setErrorMessage1("Please enter a valid 10-digit contact number");
    } else {
      setErrorMessage1("");
    }
  };

  const handleBlur2 = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue2.trim() === "") {
      setErrorMessage2("Email address is required");
    } else if (!emailRegex.test(inputValue2.trim())) {
      setErrorMessage2("Please enter a valid email address");
    } else {
      setErrorMessage2("");
    }
  };

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const formattedDate = today.toISOString().split("T")[0];
    setMinDate(formattedDate);
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Add validation for form fields
    if (!inputValue || errorMessage || errorMessage1 || errorMessage2) {
      toast.error("Please fill Appoinment Details correctly!", {
        style: {
          backgroundColor: "#E6E4D8", // Custom background color for error toast
          color: "#000000", // Black text color
        },
      });
      return;
    }

    // Show success toast if form is valid
    toast.success("Your appointment has been booked successfully!", {
      style: {
        backgroundColor: "#E6E4D8", // Custom background color for success toast
        color: "#000000", // Black text color
      },
    });

    // Reset form fields after successful submission
    handleClearInput();
  };

  return (
    <div className="flex items-center justify-center bg-primary" id="contactUs">
      <div className="w-full max-w-4xl px-8 py-10 rounded-md bg-primary">
        <h1 className="mb-12 text-4xl text-center text-assent font-primaryFont sm:text-6xl">
          Secure your hair day
        </h1>
        <form className="flex flex-col gap-6 mb-10">
          {/* Name Input */}
          <div className="relative flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
              Name
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleBlur}
              placeholder="Name"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent cursor-none"
            />
            {errorMessage && (
              <p className="absolute mt-2 text-red-500 right-3 top-1">
                {errorMessage}
              </p>
            )}
          </div>

          {/* Contact Number Input */}
          <div className="relative flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
              Contact Number
            </label>
            <input
              type="text"
              value={inputValue1}
              onBlur={handleBlur1}
              onChange={(e) => setInputValue1(e.target.value)}
              placeholder="Contact number"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 cursor-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
            {errorMessage1 && (
              <p className="absolute mt-2 text-red-500 right-3 top-1">
                {errorMessage1}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
              Email Address
            </label>
            <input
              type="email"
              value={inputValue2}
              onBlur={handleBlur2}
              onChange={(e) => setInputValue2(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 cursor-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
            {errorMessage2 && (
              <p className="absolute mt-2 text-red-500 right-3 top-1">
                {errorMessage2}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
              Preferred Service
            </label>
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 cursor-none bg-secondary-100 focus:ring-2 focus:ring-assent"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Hair colouring">Hair colouring</option>
              <option value="Hair cut">Hair cut</option>
              <option value="Hair treatment">Hair treatment</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
              Date of appointment
            </label>
            <div className="flex flex-col w-full gap-4 md:flex-row md:w-3/4">
              <input
                type="date"
                value={inputValue3}
                min={minDate}
                onChange={(e) => setInputValue3(e.target.value)}
                className="w-full p-3 font-bold text-black rounded-md outline-none cursor-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
              />

              <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4 cursor-none">
                Time of appointment
              </label>
              <input
                type="time"
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
                className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 cursor-none placeholder-secondary-200 focus:ring-2 focus:ring-assent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              type="button"
              onClick={handleClearInput}
              className="px-6 py-2 text-lg transition border rounded-md text-secondaryText border-secondaryText hover:bg-secondary-200 hover:text-primary cursor-none"
            >
              Cancel
            </button>

            <motion.button
              type="button"
              className={`relative inline-block px-6 py-2 overflow-hidden text-lg transition-all duration-300 ease-out bg-white border rounded-md border-secondaryText text-secondaryText ${
                inputValue &&
                !errorMessage &&
                inputValue1 &&
                !errorMessage1 &&
                inputValue2 &&
                !errorMessage2 &&
                selectedValue &&
                inputValue3 &&
                inputValue4
                  ? "hover:bg-secondary-200 hover:text-primary cursor-none"
                  : "opacity-50 cursor-none"
              }`}
              whileHover={
                inputValue &&
                !errorMessage &&
                inputValue1 &&
                !errorMessage1 &&
                inputValue2 &&
                !errorMessage2 &&
                selectedValue &&
                inputValue3 &&
                inputValue4
                  ? "hover"
                  : ""
              }
              initial="initial"
              animate="initial"
              onClick={
                inputValue &&
                !errorMessage &&
                inputValue1 &&
                !errorMessage1 &&
                inputValue2 &&
                !errorMessage2 &&
                selectedValue &&
                inputValue3 &&
                inputValue4
                  ? handleClick
                  : undefined
              }
              disabled={
                !(
                  inputValue &&
                  !errorMessage &&
                  inputValue1 &&
                  !errorMessage1 &&
                  inputValue2 &&
                  !errorMessage2 &&
                  selectedValue &&
                  inputValue3 &&
                  inputValue4
                )
              }
            >
              <motion.div
                className="absolute top-0 left-0 h-full transition-all duration-300 ease-out rounded-md w-14 bg-assent"
                variants={{
                  initial: { width: "56px" },
                  hover: { width: "100%" },
                }}
              ></motion.div>
              <span className="relative text-sm font-bold tracking-wider text-black sm:text-2xl">
                Book
              </span>
            </motion.button>
          </div>
        </form>
      </div>
      {/* Toast container for showing toasts */}
      <ToastContainer />
    </div>
  );
};

export default Appointment;
