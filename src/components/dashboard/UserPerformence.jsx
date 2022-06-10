import React from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const categories = {
	intensity: "Intensité",
	speed: "Vitesse",
	strength: "Force",
	endurance: "Endurance",
	energy: "Energie",
	cardio: "Cardio",
};
const categoriesNames = Object.keys(categories);

const USER_PERFORMANCE = {
	userId: 12,
	kind: {
		1: "cardio",
		2: "energy",
		3: "endurance",
		4: "strength",
		5: "speed",
		6: "intensity",
	},
	data: [
		{
			value: 80,
			kind: 1,
		},
		{
			value: 120,
			kind: 2,
		},
		{
			value: 140,
			kind: 3,
		},
		{
			value: 50,
			kind: 4,
		},
		{
			value: 200,
			kind: 5,
		},
		{
			value: 90,
			kind: 6,
		},
	],
};
for (let i = 0; i < USER_PERFORMANCE.data.length; i++) {
	const userData = USER_PERFORMANCE.data[i];
	const element = USER_PERFORMANCE.kind[userData.kind];
	userData.label = categories[element];
}
const UserPerformences = () => {
	// TODO : Margin in charts

	return (
		<div id="userPerformence">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={80} data={USER_PERFORMANCE.data} padding={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis axisLine={true} tickCount={4} fontSize="0.85rem" style={{ margin: "15px" }} dataKey="label" stroke="#fff" tickLine={false} />
					{categoriesNames.map((name, i) => (
						<Radar key={i} name={categories[name]} dataKey="value" fill="#FF0101" fillOpacity={0.2} />
					))}
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default UserPerformences;
