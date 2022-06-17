import React from "react"
import Services from "../services/services"

import DailyActivity from "./dashboard/DailyActivity.jsx"
import AverageSessions from "./dashboard/AverageSessions.jsx"
import UserPerformence from "./dashboard/UserPerformence.jsx"
import UserObjective from "./dashboard/UserObjective.jsx"
import UserInformations from "./dashboard/UserInformations.jsx"
import {useState} from "react"

const mockedUser = {
	keyData: [],
	todayScore: 0,
	userInformations: {
		age: 0,
		firstName: "",
		lastName: "",
	},
}
const Dashboard = (props) => {
	const todayScore = props.todayScore
	const userData = props.keyData

	const [user, setUser] = useState(mockedUser)
	const [isMounted, setIsMounted] = useState(false)

	/* useState(async () => {
		Services.getUserInfo(12, (user) => {
			console.log("user => ", user)
			setUser(user)
			setIsMounted(true)
		})
	}, [isMounted])
*/
	return (
		<section id="dashboard">
			<DailyActivity />
			<AverageSessions />
			<UserPerformence />
			<UserObjective score={todayScore} />
			<UserInformations data={userData} />
		</section>
	)
}

export default Dashboard
