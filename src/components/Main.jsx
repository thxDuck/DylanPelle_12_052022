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

const Main = () => {
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.id;
	const [user, setUser] = useState(mockedUser)
	const [isMounted, setIsMounted] = useState(false)
	useState(() => {
		(!isMounted && !!userId) &&
			Services.getUserInfo(userId, (user) => {
				if (!user) navigate("/error");
			setUser(user);
			setIsMounted(true);
		})
	}, [isMounted, user])

	return !isMounted ? "" : (
	<main>
		<Header name={user.userInfos.firstName} />
		<Dashboard userId={userId} score={user.score ? user.score : user.todayScore} userInformations={user.keyData} />
	</main>)
}

export default Main
