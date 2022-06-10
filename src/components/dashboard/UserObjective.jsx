import React from "react";
import { PieChart, Pie, Label as LabelList, Cell, ResponsiveContainer } from "recharts";

const UserObjective = (props) => {
	const score = props.score * 100;
	const rest = 100 - score;
	const percentage = score + "%";
	const data = [
		{ name: "Score", value: score, fill: "#FF0000" },
		{ name: "", value: rest, fill: "none" },
	];
	return (
		<div id="userObjective">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					{/* <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
					<Pie data={data} isAnimationActive={true} cx="50%" cy="50%" endAngle={450} startAngle={90} autoReverse={true} innerRadius="75%" outerRadius="85%" fill="#8884d8" dataKey="value">
						{/* <LabelList position="center" content={renderLabel} /> */}
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
						{/* <Legend verticalAlign="top" align="right" iconSize={8} iconType="circle" height={40} /> */}
						{/* <Label position="center" value={`${percentage} De votre objectif`} /> */}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className="label-objective">
				<p className="percentage">{percentage}</p>
				<p>De votre objectif</p>
			</div>
		</div>
	);
};

export default UserObjective;

const renderLabel = (active) => {
	if (active) {
		console.log("active => ", active);
		return (
			<div className="label-objective">
				<p>
					<span className="percent">12</span>
					De votre objectif
				</p>
			</div>
		);
	}
};
