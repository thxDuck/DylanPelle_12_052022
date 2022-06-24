import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

import User from "../../services/User";
import Mocks from "../../services/Mocks";

const categories = {
	intensity: "Intensité",
	speed: "Vitesse",
	strength: "Force",
	endurance: "Endurance",
	energy: "Energie",
	cardio: "Cardio",
};
const UserPerformences = () => {
	const categoriesNames = Object.keys(categories);
	const params = useParams();
	const userId = params.id;

	// cette variable alimente le graph
	const [performences, setPerformences] = useState(false);

	useEffect(() => {
		const getData = async (user) => {
			const data = await user.getPerformence();
			console.log("data => ", data);
			if (!!data.error) {
				const p = document.createElement("p");
				p.textContent = data.message;
				document.querySelector("#modal .content").appendChild(p);
				document.getElementById("modal").style.display = "flex";
				setPerformences(Mocks.performences);
			} else {
				setPerformences(data);
			}
		};
		const user = new User(userId);
		getData(user);
	}, [userId]);

	return !performences ? (
		""
	) : (
		<div id="userPerformence">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius="100%" data={performences.data} margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis axisLine={true} tickCount={4} dataKey="label" stroke="#fff" tickLine={false} />
					{categoriesNames.map((name, i) => (
						// TODO : Voir l'odre !
						<Radar key={i} name={categories[name]} order={i} dataKey="value" fill="#FF0101" fillOpacity={0.2} />
					))}
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default UserPerformences;
