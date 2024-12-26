import "./App.css";
import Footer from "./Components/Footer";
import MapComponent from "./Components/MapComponent";
import VortextComponent from "./Components/VortextComponent";
import Stories from "./Components/Stories";
import WhatWeOffer from "./Components/WhatWeOffer";
import WhoWeAre from "./Components/WhoWeAre";
import CustomCursor from "./Components/CustomCursor";
import Landing from "./Components/Landing";
import ImageTile from "./Components/ImageCard";
import SignatureServices from "./Components/SignatureServices";
import Appointment from "./Components/Appoinment";
import Preloader from "./Components/PreLoader"; // Import the Preloader component

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Render Preloader while loading is true
      ) : (
        <>
          <CustomCursor />
          <Landing />
          <WhatWeOffer />
          <SignatureServices />
          <Appointment />
          <Stories />
          <WhoWeAre />
          <ImageTile />
          <MapComponent />
          <VortextComponent />
        </>
      )}
    </>
  );
}

export default App;
