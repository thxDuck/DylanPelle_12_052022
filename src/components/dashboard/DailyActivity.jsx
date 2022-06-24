import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import User from "../../services/User";
import mocks from "../../services/mocks.js";

const Paragraph = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: #20253a;
`;

const DailyActivity = () => {
	const params = useParams();
	const userId = params.id;
	const [activities, setActivities] = useState(mocks.activities);

	useEffect(() => {
		const getActivities = async (user) => {
			const activitiesData = await user.getActivities();
			if (!!activitiesData.error) {
				const p = document.createElement("p");
				p.textContent = activitiesData.message;
				document.querySelector("#modal .content").appendChild(p);
				document.getElementById("modal").style.display = "flex";
				setActivities(mocks.activities);
			} else {
				setActivities(activitiesData);
			}
		};
		const user = new User(userId);
		getActivities(user);
	}, [userId]);

	return !activities ? (
		""
	) : (
		<div id="dailyActivity">
			<div className="title">
				<Paragraph>Activité quotidienne</Paragraph>
			</div>
			{console.log("activities => ", activities)}
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={activities}
					barSize={7}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 15,
					}}>
					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType="circle"
						height={40}
						payload={[
							{ id: "legend-kg", value: "Poids (kg)", type: "circle", color: "#282D30" },
							{ id: "legend-cal", value: "Calories brûlées (kCal)", type: "circle", color: "#E60000" },
						]}
					/>

					<XAxis dataKey="day" tickMargin="15" />
					<YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={true} type="number" domain={["dataMin - 2", "dataMax + 2"]} tickCount="4" />
					<YAxis yAxisId="left" orientation="left" hide={true} />
					<CartesianGrid vertical={false} />
					<Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
					<Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
					<Tooltip content={<CustomTooltip />} cursor={false} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DailyActivity;

const CustomTooltip = ({ label, active, payload }) => {
	if (active && payload?.length > 0) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].payload.kilogram || 0}kg`}</p>
				<p>{`${payload[0].payload.calories || 0}Kcal`}</p>
			</div>
		);
	}
};
