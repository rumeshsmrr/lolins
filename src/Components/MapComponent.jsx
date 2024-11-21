// import React from "react";

// const MapComponent = () => {
//   const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=South+Beach,Miami,33139`;

//   return (
//     <div className="relative w-full h-[300px] md:h-[500px] bg-black flex flex-col items-center justify-center rounded-lg overflow-hidden">
//       {/* Title above the map */}
//       <div className="absolute top-4 text-center z-10">
//         <h2 className="text-white text-xl md:text-3xl font-serif">Find Us</h2>
//       </div>
//       {/* Embedded Google Map */}
//       <iframe
//         title="South Beach Map"
//         src={googleMapUrl}
//         style={{
//           border: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 1,
//           position: "relative",
//         }}
//         allowFullScreen
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };

// export default MapComponent;
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom marker configuration
import "leaflet/dist/leaflet.css"; // Import default Leaflet styles

// Import default Leaflet marker images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";

// Fix the default marker icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const position = [25.790654, -80.130045]; // Latitude and Longitude for South Beach, Miami

  return (
    <div className="relative w-full h-[300px] md:h-[500px] bg-black flex flex-col items-center justify-center rounded-lg overflow-hidden">
      {/* Title above the map */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-white text-xl md:text-3xl font-serif">Find Us</h2>
      </div>
      {/* Leaflet Map */}
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Marker position={position}>
          <Popup>South Beach, Miami, 33139</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
