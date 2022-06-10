import React from "react";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const data = [
	{
		day: "2020-07-01",
		kilogram: 80,
		calories: 240,
	},
	{
		day: "2020-07-02",
		kilogram: 80,
		calories: 220,
	},
	{
		day: "2020-07-03",
		kilogram: 81,
		calories: 280,
	},
	{
		day: "2020-07-04",
		kilogram: 81,
		calories: 290,
	},
	{
		day: "2020-07-05",
		kilogram: 80,
		calories: 160,
	},
	{
		day: "2020-07-06",
		kilogram: 78,
		calories: 162,
	},
	{
		day: "2020-07-07",
		kilogram: 76,
		calories: 390,
	},
];

const Paragraph = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: #20253a;
`;

const DailyActivity = () => {
	// const dataMax = Math.max(...data.map((item) => item.kilogram)) + 2;
	// const dataMin = Math.min(...data.map((item) => item.kilogram)) - 2;
	return (
		<div id="dailyActivity">
			<div className="title">
				<Paragraph>Activité quotidienne</Paragraph>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data}
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

					<XAxis dataKey="day" tickFormatter={(date) => `${new Date(date).getDate()}`} tickMargin="15" />
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
	if (active) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].payload.kilogram}kg`}</p>
				<p>{`${payload[0].payload.calories}Kcal`}</p>
			</div>
		);
	}
};
