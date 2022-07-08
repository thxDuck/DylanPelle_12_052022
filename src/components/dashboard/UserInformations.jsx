import React from "react";
import PropTypes from "prop-types";
import Card from "../partials/Card.jsx";

import carbohydrateIcon from "../../assets/images/icons/carbohydrate.svg";
import caloriesIcon from "../../assets/images/icons/calories.svg";
import proteinIcon from "../../assets/images/icons/protein.svg";
import lipidIcon from "../../assets/images/icons/lipid.svg";

/**
 * Group icons in constant for using the same icon for different nutriments.
 */
const ICONS = {
    carbohydrateIcon,
    caloriesIcon,
    proteinIcon,
    lipidIcon,
};

/**
 * This is the component that contains cards with information about nutriments the user.
 * @param {{}} props - Values of nutriments of the user
 * @returns {React.FunctionComponent} - Components contains all cards with nutriment informations.
 */
const UserInformations = (props) => {
    const userInformations = props.userInformations;

    return (
        <div className="informationCards">
            {userInformations.map((key, i) => (
                <Card key={i} id={key.name} title={key.name} icon={ICONS[key.icon]} unit={key.unit} value={key.value} />
            ))}
        </div>
    );
};

UserInformations.propTypes = {
    userInformations: PropTypes.array.isRequired,
};
export default UserInformations;
