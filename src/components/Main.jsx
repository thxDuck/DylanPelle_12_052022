import React from "react"
import { useState } from "react"
import Header from "./Header.jsx"
import Dashboard from "./Dashboard.jsx"
import Services from "../services/services"
import { useParams, useNavigate } from "react-router-dom";
const mockedUser = {
	keyData: [],
	todayScore: 0,
	userInfos: {
		age: 0,
		firstName: "",
		lastName: "",
	},
}

const Main = (props) => {
	const params = useParams();
	const userId = params.id;
	const [user, setUser] = useState(mockedUser)
	const [isMounted, setIsMounted] = useState(false)

	useState(() => {
		!isMounted &&
			Services.getUserInfo(userId, (user) => {
				if (!user) {
					return false
					// TODO Redirect to error page
					// navigate("/error");
			}
			console.log("user => ", user)
			setUser(user);
			setIsMounted(true);
		})
	}, [isMounted])

	return (
	<main>
		<Header name={user.userInfos.firstName} />
		<Dashboard todayScore={user.todayScore} userInformations={user.keyData} />
	</main>)
}

export default Main
