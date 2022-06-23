import React from "react";
import Logo from "../../../assets/images/icons/logo.svg";
import { Link } from "react-router-dom";
const HorizontalNav = () => {
	return (
		<div className="navbar-top">
			<div className="logo">
				<img src={Logo} alt="courreur" />
			</div>
			<div className="navbar-top__pages">
				<ul>
					<li>
						<Link to="/dashboard/12">Accueil</Link>
					</li>

					<li>
						<a href="/dashboard/18">Profil</a>
					</li>

					<li>
						<a href="/Réglages">Réglage</a>
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
