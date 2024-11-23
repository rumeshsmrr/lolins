import "./App.css";
import Footer from "./Components/Footer";
import MapComponent from "./Components/MapComponent";
import VortextComponent from "./Components/VortextComponent";
import Stories from "./Components/Stories";
import WhatWeOffer from "./Components/WhatWeOffer";

function App() {
  return (
    <>
      <Stories />
      <WhatWeOffer />
      <MapComponent />
      <VortextComponent />
      <Footer />
    </>
  );
}

export default App;
