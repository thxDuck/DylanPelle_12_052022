import React from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Services from "../../services/services"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts"

const Paragraph = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: #20253a;
`

const DailyActivity = () => {
	const navigate = useNavigate()
	const params = useParams()
	const userId = params.id

	const [activities, setActivities] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	useState(() => {
		!isMounted &&
			Services.getDailyActivity(userId, (activity) => {
				const sessions = activity.sessions
				if (!sessions) navigate("/error");
				setActivities(sessions);
				setIsMounted(true)
			})
	}, [isMounted])

	return !isMounted ? "" : (
		<div id="dailyActivity">
			<div className="title">
				<Paragraph>Activité quotidienne</Paragraph>
			</div>
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
					}} >
					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType="circle"
						height={40}
						payload={[
							{id: "legend-kg", value: "Poids (kg)", type: "circle", color: "#282D30"},
							{id: "legend-cal", value: "Calories brûlées (kCal)", type: "circle", color: "#E60000"},
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
	)
}

export default DailyActivity

const CustomTooltip = ({label, active, payload}) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].payload.kilogram}kg`}</p>
				<p>{`${payload[0].payload.calories}Kcal`}</p>
			</div>
		)
	}
}
