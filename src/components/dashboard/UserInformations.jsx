import React from "react";
import PropTypes from "prop-types";
import Card from "../partials/Card.jsx";

import carbohydrateIcon from "../../assets/images/icons/carbohydrate.svg";
import caloriesIcon from "../../assets/images/icons/calories.svg";
import proteinIcon from "../../assets/images/icons/protein.svg";
import lipidIcon from "../../assets/images/icons/lipid.svg";

/**
 * Data by key is an object that contains the key name and the icon and unit of the data to display labels in french.
 */
const dataByKey = {
    calorieCount: {
        name: "Calories",
        unit: "kCal",
        id: "calories",
        icon: caloriesIcon,
    },
    proteinCount: {
        name: "Protéines",
        unit: "g",
        id: "protein",
        icon: proteinIcon,
    },
    carbohydrateCount: {
        name: "Glucides",
        unit: "g",
        id: "carb",
        icon: carbohydrateIcon,
    },
    lipidCount: {
        name: "Lipides",
        unit: "g",
        id: "lipid",
        icon: lipidIcon,
    },
};

/**
 * This is the component that contains cards with informations about nutriments of user.
 * @param {{}} props - Values of nutriments of the user
 * @returns {React.FunctionComponent} - Components contains all cards with nutriment informations.
 */
const UserInformations = (props) => {
    const userInformations = props.userInformations;

    // Key names must be the same as in the userInformations properties.
    const keyNames = Object.keys(dataByKey);
    return (
        <div className="informationCards">
            {keyNames.map((key) => (
                <Card key={key} id={dataByKey[key].id} title={dataByKey[key].name} icon={dataByKey[key].icon} unit={dataByKey[key].unit} value={userInformations[key]} />
            ))}
        </div>
    );
};

UserInformations.propTypes = {
    userInformations: PropTypes.exact({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired,
    }),
};
export default UserInformations;
