import React from "react";
import "./About.css";
import about_photo from "../../assets/detailing-photo-1.jpg";
const About = () => {
	return (
		<div id="about" className="about">
			<div className="about-title">
				<h1>Despre Advanced Works</h1>
			</div>
			<div className="about-section">
				<div className="about-left">
					<img src={about_photo} alt="" />
				</div>
				<div className="about-right">
					<p>
						Suntem o echipa tanara si pasionata in lumea auto. Ne-am integrat cu
						determinare intr-o piata deja consolidata, bazandu-ne pe atentia
						noastra la detalii, profesionalismul si dorinta constanta de a ne
						afirma. Serviciile noastre de ingrijire si tuning auto sunt
						echivalente cu standardele premium din domeniu.
					</p>
					<p>
						De la montajul elementelor de tuning la detalii interioare si
						exterioare, precum si aplicarea de coating-uri ceramice, infoliere
						si reconditionari, fiecare interventie este executata cu precizie si
						pasiune.
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
