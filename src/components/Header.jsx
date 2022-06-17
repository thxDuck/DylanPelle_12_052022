import React from "react";

const Header = (props) => {
	const name = props.name;
	return (
		<header>
			<h1>
				Bonjour <span className="username">{name} !</span>
			</h1>
			<p id="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</header>
	);
};

export default Header;
