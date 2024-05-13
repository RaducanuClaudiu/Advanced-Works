import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
const Services = () => {
	return (
		<div id="services" className="services">
			<div className="services-title">
				<h1>Serviciile Noastre</h1>
			</div>
			<ServiceCard />
		</div>
	);
};
export default Services;
