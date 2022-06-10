import React from "react";

const Header = () => {
	return (
		<header>
			<h1>
				Bonjour <span className="username">Thomas</span> !
			</h1>
			<p id="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</header>
	);
};

export default Header;
