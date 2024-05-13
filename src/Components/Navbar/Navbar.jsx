import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
	const [isDisplayed, setIsDisplayed] = useState(false);

	function handleMenuClick() {
		setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
	}

	let dropdownMenuClasses = "nav-menu";
	if (isDisplayed) {
		dropdownMenuClasses += " display-mobile-menu";
	}

	return (
		<header className="navigation">
			<div className="d-flex justify-content-between align-items-center container">
				<h2 className="brand">AdvancedWorks</h2>

				<div className="menu-icon-container">
					<span
						onClick={handleMenuClick}
						className="material-icons menu-icon text-light"
					>
						{" "}
						menu{" "}
					</span>
					<ul className={dropdownMenuClasses}>
						<li className={isDisplayed ? "container" : null}>
							<AnchorLink className="anchor-link" offset={50} href="#about">
								Despre noi
							</AnchorLink>
						</li>
						<li className={isDisplayed ? "container" : null}>
							<AnchorLink className="anchor-link" offset={50} href="#services">
								Servicii
							</AnchorLink>
						</li>
						<li className={isDisplayed ? "container" : null}>
							<AnchorLink className="anchor-link" offset={50} href="#contact">
								Contact
							</AnchorLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
