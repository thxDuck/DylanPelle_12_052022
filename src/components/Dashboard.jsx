import React from "react"

import DailyActivity from "./dashboard/DailyActivity.jsx"
import AverageSessions from "./dashboard/AverageSessions.jsx"
import UserPerformence from "./dashboard/UserPerformence.jsx"
import UserObjective from "./dashboard/UserObjective.jsx"
import UserInformations from "./dashboard/UserInformations.jsx"

const Dashboard = (props) => {
	const score = props.score;
	const userInformations = props.userInformations;
	return (
		<section id="dashboard">
			<DailyActivity />
			<AverageSessions />
			<UserPerformence />
			<UserObjective score={score} />
			<UserInformations userInformations={userInformations} />
		</section>
	)
}

export default Dashboard
