import React from "react";

const MapComponent = () => {
  const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=South+Beach,Miami,33139`;

  return (
    <div className="relative w-full h-[300px] md:h-[500px] bg-black flex flex-col items-center justify-center rounded-lg overflow-hidden">
      {/* Title above the map */}
      <div className="absolute top-4 text-center z-10">
        <h2 className="text-white text-xl md:text-3xl font-serif">Find Us</h2>
      </div>
      {/* Embedded Google Map */}
      <iframe
        title="South Beach Map"
        src={googleMapUrl}
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          position: "relative",
        }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
