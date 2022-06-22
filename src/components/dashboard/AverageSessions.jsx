import React from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {LineChart, Line, Tooltip, XAxis, ResponsiveContainer} from "recharts"

import Services from "../../services/services"

const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

const AverageSessions = () => {
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.id;

	const [sessions, setSessions] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	useState(() => {
		!isMounted &&
			Services.getSessions(userId, (averageSessions) => {
				const sessions = averageSessions.sessions;
				if (!averageSessions) navigate("/error");
				setSessions(sessions);
				setIsMounted(true);
			})
	}, [isMounted]);


	return !isMounted ? "" : (
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
					<Line type="monotone" margin={{top: 50, right: 20, bottom: 5, left: 0}} aria-valuemax={500} dataKey="sessionLength" dot={false} stroke="#fff" strokeWidth="2" tickLine={false} />
					<XAxis dataKey="day" stroke="#fff" tickLine={false} tickMargin={15} axisLine={false} tickFormatter={(dayNumber) => `${DAYS[dayNumber - 1]}`} />
					<Tooltip content={<CustomTooltip />} cursor={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

// TODO : Représenter le weekend en background

const CustomTooltip = ({active, payload}) => {
	if (active) {
		const sessionLength = `${payload[0].payload.sessionLength} min`
		return (
			<div className="custom-tooltip">
				<p className="label">{sessionLength}</p>
			</div>
		)
	}
}

export default AverageSessions