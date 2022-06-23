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
						<a href="/dashboard/12">Accueil</a>
					</li>

					<li>
						<a href="/dashboard/18">Profil</a>
					</li>

					<li>
						<a href="/dashboard/0">Réglage</a>
					</li>

					<li>
						<a href="/Communauté">Communauté</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HorizontalNav;
