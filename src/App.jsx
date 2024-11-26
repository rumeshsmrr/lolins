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

function App() {
	return (
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
	);
}

export default App;
