import React from "react";
import PropTypes from "prop-types";

/**
 * Header component displays the name of the user and a message. If it's a mock, dipslay error message
 *
 * @param {string} name - Name of user
 * @param {bool} mock - If is a mocked user
 * @returns {React.FunctionComponent} - Header component with name and message to user.
 */
const Header = (props) => {
    const name = props.name;
    const mock = props.mock;
    const message = !mock ? `Félicitation ! Vous avez explosé vos objectifs hier 👏` : `Utilisateur introuvable`;
    return (
        <header>
            <h1>
                Bonjour <span className="username">{name}</span>
            </h1>
            <p id="message">{!mock ? message : "Utilisateur introuvable"}</p>
        </header>
    );
};

Header.propTypes = {
    name: PropTypes.string,
    mock: PropTypes.bool.isRequired,
};

export default Header;
