//sweetalert2 - alert Box

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { motion } from "framer-motion"; // Importing motion for animations

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contactNumber: "",
//     email: "",
//     service: "Hair colouring",
//     appointmentDate: "",
//     appointmentTime: "",
//   });

//   const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleClick = (event) => {
//     event.preventDefault();

//     if (!isFormValid) return; // Prevent submitting if form is invalid

//     // Show success alert after form confirmation
//     Swal.fire({
//       title: "Good job!",
//       text: "You clicked the button!",
//       icon: "success",
//     });

//     // Reset form data after showing the alert
//     setFormData({
//       name: "",
//       contactNumber: "",
//       email: "",
//       service: "Hair colouring",
//       appointmentDate: "",
//       appointmentTime: "",
//     });
//   };

//   const getCurrentDate = () => {
//     const now = new Date();
//     return now.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//   };

//   const getCurrentTime = () => {
//     const now = new Date();
//     return now.toTimeString().split(" ")[0].slice(0, 5); // Format as HH:MM
//   };

//   return (
//     <div className="flex items-center justify-center bg-primary" id="Appoinment">
//       <div className="w-full max-w-4xl px-8 py-10 rounded-md bg-primary">
//         <h1 className="mb-12 text-4xl text-center text-assent font-primaryFont sm:text-6xl">
//           Secure your hair day
//         </h1>
//         <form className="flex flex-col gap-6 mb-10">
//           {/* Name Input */}
//           <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
//             <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//               className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
//             />
//           </div>

//           {/* Contact Number Input */}
//           <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
//             <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//               Contact Number
//             </label>
//             <input
//               type="text"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleInputChange}
//               placeholder="Contact number"
//               className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
//             <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email Address"
//               className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
//             />
//           </div>

//           {/* Preferred Service Dropdown */}
//           <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
//             <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//               Preferred Service
//             </label>
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleInputChange}
//               className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 focus:ring-2 focus:ring-assent"
//             >
//               <option value="Hair colouring">Hair colouring</option>
//               <option value="Hair cut">Hair cut</option>
//               <option value="Hair treatment">Hair treatment</option>
//             </select>
//           </div>

//           {/* Appointment Date and Time */}
//           <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
//             <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//               Date of appointment
//             </label>
//             <div className="flex flex-col w-full gap-4 md:flex-row md:w-3/4">
//               <input
//                 type="date"
//                 name="appointmentDate"
//                 value={formData.appointmentDate}
//                 onChange={handleInputChange}
//                 min={getCurrentDate()}
//                 className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
//               />
//               <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
//                 Time of appointment
//               </label>
//               <input
//                 type="time"
//                 name="appointmentTime"
//                 value={formData.appointmentTime}
//                 onChange={handleInputChange}
//                 min={formData.appointmentDate === getCurrentDate() ? getCurrentTime() : ""}
//                 className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
//               />
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-center gap-6 mt-6">
//             <button
//               type="button"
//               className="px-6 py-2 text-lg transition border rounded-md text-secondaryText border-secondaryText hover:bg-secondary-200 hover:text-primary"
//             >
//               Cancel
//             </button>
            
//             <motion.a
//               href="#"
//               className="relative inline-block px-6 py-2 overflow-hidden text-lg transition-all duration-300 ease-out bg-white border rounded-md border-secondaryText text-secondaryText hover:bg-secondary-200 hover:text-primary"
//               whileHover="hover"
//               initial="initial"
//               animate="initial"
//               onClick={handleClick}
//             >
//               <motion.div
//                 className="absolute top-0 left-0 h-full transition-all duration-300 ease-out rounded-md w-14 bg-assent"
//                 variants={{
//                   initial: { width: "56px" },
//                   hover: { width: "100%" },
//                 }}
//               ></motion.div>
//               <span className="relative text-sm font-bold tracking-wider text-black sm:text-2xl">
//                 Book
//               </span>
//             </motion.a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Appointment;







//toastify version - alert Box

import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion for animations
import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importing the required CSS for toast

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    service: "Hair colouring",
    appointmentDate: "",
    appointmentTime: "",
  });

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (!isFormValid) return; // Prevent submitting if form is invalid

    // Show a toast message with custom styling
    toast.success("Your appointment has been booked successfully!", {
      style: {
        backgroundColor: "#E6E4D8", // Set custom background color
        color: "#000000", // Set text color (black)
      },
    });

    // Reset form data after showing the alert
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      service: "Hair colouring",
      appointmentDate: "",
      appointmentTime: "",
    });
  };

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0].slice(0, 5); // Format as HH:MM
  };

  return (
    <div className="flex items-center justify-center bg-primary" id="Appoinment">
      <div className="w-full max-w-4xl px-8 py-10 rounded-md bg-primary">
        <h1 className="mb-12 text-4xl text-center text-assent font-primaryFont sm:text-6xl">
          Secure your hair day
        </h1>
        <form className="flex flex-col gap-6 mb-10">
          {/* Name Input */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Contact Number Input */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Contact number"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
            />
          </div>

          {/* Preferred Service Dropdown */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Preferred Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-3 font-bold text-black rounded-md outline-none md:w-3/4 bg-secondary-100 focus:ring-2 focus:ring-assent"
            >
              <option value="Hair colouring">Hair colouring</option>
              <option value="Hair cut">Hair cut</option>
              <option value="Hair treatment">Hair treatment</option>
            </select>
          </div>

          {/* Appointment Date and Time */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-between">
            <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
              Date of appointment
            </label>
            <div className="flex flex-col w-full gap-4 md:flex-row md:w-3/4">
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                min={getCurrentDate()}
                className="w-full p-3 font-bold text-black rounded-md outline-none bg-secondary-100 placeholder-secondary-200 focus:ring-2 focus:ring-assent"
              />
              <label className="mb-2 text-lg text-secondaryText md:mb-0 md:w-1/4">
                Time of appointment
              </label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleInputChange}
                min={formData.appointmentDate === getCurrentDate() ? getCurrentTime() : ""}
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
            
            <motion.a
              href="#"
              className="relative inline-block px-6 py-2 overflow-hidden text-lg transition-all duration-300 ease-out bg-white border rounded-md border-secondaryText text-secondaryText hover:bg-secondary-200 hover:text-primary"
              whileHover="hover"
              initial="initial"
              animate="initial"
              onClick={handleClick}
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
            </motion.a>
          </div>
        </form>
      </div>
      {/* Toast container for showing toasts */}
      <ToastContainer />
    </div>
  );
};

export default Appointment;
