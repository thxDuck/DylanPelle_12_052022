import React from "react";
import Card from "../Card.jsx";

import caloriesIcon from "../../assets/images/icons/calories.svg";
import proteinIcon from "../../assets/images/icons/protein.svg";
import carbohydrateIcon from "../../assets/images/icons/carbohydrate.svg";
import lipidIcon from "../../assets/images/icons/lipid.svg";

const user = {
	id: 12,
	userInfos: {
		firstName: "Karl",
		lastName: "Dovineau",
		age: 31,
	},
	todayScore: 0.12,
	keyData: {
		calorieCount: 1930,
		proteinCount: 155,
		carbohydrateCount: 290,
		lipidCount: 50,
	},
};
// Todo : Créer le service qui va gérer les différents mots/unités
//  TODO peut etre hard coder les imports et les passer en props
// ../assets/images/icons/
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
const UserInformations = () => {
	const keyNames = Object.keys(dataByKey);
	console.log("keyNames => ", keyNames);
	return (
		<>
			{keyNames.map((key) => (
				<Card key={key} id={dataByKey[key].id} title={dataByKey[key].name} icon={dataByKey[key].icon} unit={dataByKey[key].unit} value={user.keyData[key]} />
			))}

			{/* <Card value={user.keyData.calorieCount} title={dataByKey["calorieCount"]} icon="../assets/images/icons/logo.svg" /> */}
			{/* <div id="protein">protein</div>
			<div id="carb">carb</div>
			<div id="lipid">lipid</div> */}
		</>
	);
};

export default UserInformations;