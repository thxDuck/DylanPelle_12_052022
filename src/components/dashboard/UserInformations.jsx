import React from "react";
import Card from "../partials/Card.jsx";

import caloriesIcon from "../../assets/images/icons/calories.svg";
import proteinIcon from "../../assets/images/icons/protein.svg";
import carbohydrateIcon from "../../assets/images/icons/carbohydrate.svg";
import lipidIcon from "../../assets/images/icons/lipid.svg";

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
const UserInformations = (props) => {
	const userInformations = props.userInformations;

	const keyNames = Object.keys(dataByKey);
	return (
		<>
			{keyNames.map((key) => (
				<Card key={key} id={dataByKey[key].id} title={dataByKey[key].name} icon={dataByKey[key].icon} unit={dataByKey[key].unit} value={userInformations[key]} />
			))}
		</>
	);
};

export default UserInformations;
