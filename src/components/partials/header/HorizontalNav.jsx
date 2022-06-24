import React from "react";
import Logo from "../../../assets/images/icons/logo.svg";
const HorizontalNav = () => {
	return (
		<div className="navbar-top">
			<div className="logo">
				<img src={Logo} alt="courreur" />
			</div>
			<div className="navbar-top__pages">
				<ul>
					<li>
						<a href="/">Accueil</a>
					</li>

					<li>
						<a href="/12">Profil</a>
					</li>

					<li>
						<a href="/18">Réglage</a>
					</li>

					<li>
						<a href="/">Communauté</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HorizontalNav;
