import React from "react";

import DailyActivity from "./dashboard/DailyActivity.jsx";
import AverageSessions from "./dashboard/AverageSessions.jsx";
import UserPerformence from "./dashboard/UserPerformence.jsx";
import UserObjective from "./dashboard/UserObjective.jsx";
import UserInformations from "./dashboard/UserInformations.jsx";

const Dashboard = () => {
	return (
		<section id="dashboard">
			<DailyActivity />
			<AverageSessions />
			<UserPerformence />
			<UserObjective score="0.75" />
			<UserInformations />
		</section>
	);
};

export default Dashboard;
