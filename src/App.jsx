import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<div className="container px-5">
				<Hero />
				<About />
				<Services />
				<Contact />
			</div>
			<Footer />
		</div>
	);
};

export default App;
