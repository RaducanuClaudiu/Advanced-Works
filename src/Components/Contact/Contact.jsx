import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail.svg";
import location_icon from "../../assets/location.svg";
import phone_icon from "../../assets/phone.svg";

const Contact = () => {
	const [result, setResult] = React.useState("");
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "88ef195a-b55f-4c52-a3d4-11913844c1cf");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			setResult(data.message);
		}

		setTimeout(() => {
			setResult("");
		}, 2000);
	};

	return (
		<div id="contact" className="contact">
			<div className="contact-title">
				<h1>Cere o parere avizata!</h1>
			</div>
			<div className="contact-section">
				<div className="contact-left">
					<h1>Hai sa vorbim</h1>
					<p>
						Suntem gata sa iti transformam masina, asadar ne poti contacta
						oricand pentru a-ti oferi sfaturi de cea mai buna calitate.
					</p>
					<div className="contact-details">
						<div className="contact-detail">
							<img src={mail_icon} alt="" />
							<p>raducanuclaudiu83@gmail.com</p>
						</div>
						<div className="contact-detail">
							<img src={phone_icon} alt="" />
							<p>0761955547</p>
						</div>
						<div className="contact-detail">
							<img src={location_icon} alt="" />
							<p>Bucuresti, str Popa Nicolae nr 21. </p>
						</div>
					</div>
				</div>
				<div className="contact-right">
					{result && <div className="notification">{result}</div>}
					<form onSubmit={onSubmit}>
						<label htmlFor="">Numele tau:</label>
						<input type="text" placeholder="Popescu Ion" name="name" required />
						<label htmlFor="">Adresa ta de Email:</label>
						<input
							type="email"
							placeholder="ex:popescu.ion@gmail.com"
							name="email"
							required
						/>
						<label htmlFor="">Numarul tau de telefon:</label>
						<input
							type="phone-number"
							placeholder="ex:0762222222"
							name="phone-number"
							required
						/>
						<label htmlFor="">Marca si modelul masinii:</label>
						<textarea
							name="message"
							rows="8"
							placeholder="Marca si modelul masinii si ce pachet de servicii iti doresti."
							required
						></textarea>
						<button type="submit" className="contact-submit">
							Trimite
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
