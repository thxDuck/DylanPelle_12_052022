import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../partials/header/Header";
import Dashboard from "../dashboard/Dashboard";

import User from "../../services/User";
import Mocks from "../../services/Mocks.js";

const Main = () => {
	const params = useParams();
	const userId = params.id;
	const [user, setUser] = useState(Mocks.userInformation);

	useEffect(() => {
		const getData = async (user) => {
			const data = await user.getInformations();
			if (!!data.error) {
				const p = document.createElement("p");
				p.textContent = data.message;
				document.querySelector("#modal .content").appendChild(p);
				document.getElementById("modal").style.display = "flex";
				setUser(Mocks.userInformation);
			} else {
				setUser(data);
			}
		};
		const user = new User(userId);
		getData(user);
	}, [userId]);

	return !user ? (
		""
	) : (
		<main>
			<Header name={user.firstName} />
			{!user.mock ? <Dashboard userId={userId} score={user.score} userInformations={user.keyData} /> : <></>}
		</main>
	);
};

export default Main;
