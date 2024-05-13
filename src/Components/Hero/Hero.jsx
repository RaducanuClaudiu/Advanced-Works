import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero-img.jpg";

const Hero = () => {
	return (
		<div className="hero">
			<img src={hero_img} alt="" />
			<h1>
				<span>Advanced Works</span>
			</h1>
			<p>
				Oferim servicii premium de detailing auto, inclusiv montaj de elemente
				de tuning, tratamente de protectie, reconditionare faruri, colantare
				auto si multe altele, pentru a aduce masinile la nivelul maxim de
				frumusete si performanta.
			</p>
		</div>
	);
};

export default Hero;
