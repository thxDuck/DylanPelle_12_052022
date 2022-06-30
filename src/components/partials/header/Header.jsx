import React from "react";

const Header = (props) => {
	const name = props.name;
	const mock = props.mock;
	return !mock ? (
		<header>
			<h1>
				Bonjour <span className="username">{name} !</span>
			</h1>
			<p id="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</header>
	) : (
		<header>
			<h1>Utilisateur introuvable</h1>
			<p id="message"></p>
		</header>
	);
};

export default Header;
