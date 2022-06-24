import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";

import User from "../../services/User";
import mocks from "../../services/mocks.js";

const AverageSessions = () => {
	const params = useParams();
	const userId = params.id;
	const [sessions, setSessions] = useState(false);

	useEffect(() => {
		const getData = async (user) => {
			const data = await user.getAverageSessions();
			if (!!data.error) {
				const p = document.createElement("p");
				p.textContent = data.message;
				document.querySelector("#modal .content").appendChild(p);
				document.getElementById("modal").style.display = "flex";
				setSessions(mocks.averageSessions);
			} else {
				setSessions(data);
			}
		};
		const user = new User(userId);
		getData(user);
	}, [userId]);

	return !sessions ? (
		""
	) : (
		<div id="averageSessions">
			<div className="title">
				<p>
					Durée moyenne des
					<br />
					sessions
				</p>
			</div>
			<ResponsiveContainer width="100%" height="80%">
				<LineChart data={sessions}>
					<Line strokeDashArray="4 1 2" type="monotone" margin={{ top: 50, right: 20, bottom: 5, left: 0 }} aria-valuemax={500} dataKey="sessionLength" dot={false} stroke="#fff" strokeWidth="2" tickLine={false} />
					<XAxis dataKey="day" stroke="#fff" tickLine={false} tickMargin={15} axisLine={false} />
					<Tooltip content={<CustomTooltip />} cursor={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

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

export default AverageSessions;
