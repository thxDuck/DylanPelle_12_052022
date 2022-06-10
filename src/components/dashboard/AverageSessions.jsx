import React from "react";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";
// https://recharts.org/en-US/api/LineChart
const DAYS = ["L", "M", "M", "J", "V", "S", "D"];
const AverageSessions = () => {
	const data = [
		{
			day: 1,
			sessionLength: 30,
		},
		{
			day: 2,
			sessionLength: 23,
		},
		{
			day: 3,
			sessionLength: 45,
		},
		{
			day: 4,
			sessionLength: 50,
		},
		{
			day: 5,
			sessionLength: 0,
		},
		{
			day: 6,
			sessionLength: 10,
		},
		{
			day: 7,
			sessionLength: 60,
		},
	];
	// TODO : largeur de l'opacité des lignes restantes au hover ou opacité fixe ?
	return (
		<div id="averageSessions">
			<div className="title">
				<p>
					Durée moyenne des
					<br />
					sessions
				</p>
			</div>
			<ResponsiveContainer width="100%" height="80%">
				<LineChart data={data} stackOffset="silhouette">
					<Line type="monotone" margin={{ top: 50, right: 20, bottom: 5, left: 0 }} overflow={150} aria-valuemax={500} dataKey="sessionLength" dot={false} stroke="#fff" strokeWidth="2" tickLine={false} />
					<XAxis dataKey="day" stroke="#fff" tickLine={false} tickMargin={15} axisLine={false} tickFormatter={(dayNumber) => `${DAYS[dayNumber - 1]}`} />
					<Tooltip content={<CustomTooltip />} cursor={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AverageSessions;

const CustomTooltip = ({ active, payload }) => {
	if (active) {
		const sessionLength = `${payload[0].payload.sessionLength} min`;
		return (
			<div className="custom-tooltip">
				<p className="label">{sessionLength}</p>
			</div>
		);
	}
};
