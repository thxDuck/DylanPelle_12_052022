import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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
					<Pie data={data} isAnimationActive={true} cx="50%" cy="50%" endAngle={450} startAngle={90} autoReverse={true} innerRadius="75%" outerRadius="85%" fill="#8884d8" dataKey="value">
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
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
