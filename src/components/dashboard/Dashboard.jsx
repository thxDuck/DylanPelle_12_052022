import React from "react";

import DailyActivity from "./DailyActivity.jsx";
import AverageSessions from "./AverageSessions.jsx";
import UserPerformence from "./UserPerformence.jsx";
import UserObjective from "./UserObjective.jsx";
import UserInformations from "./UserInformations.jsx";

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
	);
};

export default Dashboard;
