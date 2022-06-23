import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

import Services from "../../services/services";

const categories = {
	intensity: "Intensité",
	speed: "Vitesse",
	strength: "Force",
	endurance: "Endurance",
	energy: "Energie",
	cardio: "Cardio",
};
const UserPerformences = () => {
	const navigate = useNavigate();
	const categoriesNames = Object.keys(categories);
	const params = useParams();
	const userId = params.id;

	const [performences, setPerformences] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useState(() => {
		!isMounted &&
			Services.getPerformence(userId, (userPerformence) => {
				if (!userPerformence) navigate("/error/");
				for (let i = 0; i < userPerformence.data.length; i++) {
					const userData = userPerformence.data[i];
					const element = userPerformence.kind[userData.kind];
					userData.label = categories[element];
				}
				setPerformences(userPerformence);
				setIsMounted(true);
			});
	}, [isMounted]);

	return !isMounted ? (
		""
	) : (
		<div id="userPerformence">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={66} data={performences.data} padding={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis axisLine={true} tickCount={4} fontSize="0.7rem" dataKey="label" stroke="#fff" tickLine={false} />
					{categoriesNames.map((name, i) => (
						<Radar key={i} name={categories[name]} dataKey="value" fill="#FF0101" fillOpacity={0.2} />
					))}
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default UserPerformences;
