import React from "react";

const Appointment = () => {
  return (
    <div className="flex items-center justify-center bg-primary" id="contactUs">
      <div className="w-full max-w-4xl px-8 py-10 rounded-md bg-primary">
        <h1 className="mb-12 text-4xl text-center text-assent font-primaryFont sm:text-6xl">
          Secure your hair day
        </h1>
        <form className="flex flex-col gap-6 mb-10">
          {/* Name Input */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Contact Number Input */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Contact number"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Preferred Service Dropdown */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Preferred Service
            </label>
            <select className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 focus:ring-2 focus:ring-assent">
              <option value="Hair colouring">Hair colouring</option>
              <option value="Hair cut">Hair cut</option>
              <option value="Hair treatment">Hair treatment</option>
            </select>
          </div>

          {/* Appointment Date and Time (Desktop inline) */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Date of appointment
            </label>
            <div className="flex flex-col w-full gap-4 md:flex-row md:w-3/4">
              <input
                type="date"
                className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
              />
              <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
                Time of appointment
              </label>
              <input
                type="time"
                className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              type="button"
              className="px-6 py-2 text-lg transition border rounded-md text-secondaryText border-secondaryText hover:bg-secondary-200 hover:text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-lg transition rounded-md bg-secondaryText text-primary hover:bg-primaryText hover:text-primary"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
