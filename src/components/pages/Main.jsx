import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../partials/header/Header";
import Dashboard from "../dashboard/Dashboard";

import utils from "../../services/utils.js";
import User from "../../services/User";

/**
 * This is the main page. It get user id in url and get information from API.
 * Display dashboard if user is found, else display only Header component.
 *
 * @returns {React.Component}
 */
const Main = () => {
    const params = useParams();
    const userId = params.id;

    /**
     * Contains user information, or a simulation if the API does not find the user.
     */
    const [user, setUser] = useState(utils.mocks.userInformation);
    /**
     * Used to see if api call is done.
     */
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const getData = async (user) => {
            const data = await user.getInformations();
            let userData = data;
            setMounted(true);
            if (!!data.error) {
                utils.displayMessageInModal(data.message, true);
                userData = utils.mocks.userInformation;
            }
            setUser(userData);
        };

        const user = new User(userId);
        getData(user);
    }, [userId]);

    return !!user ? (
        <main>
            {mounted ? <Header name={user.firstName} mock={user.mock} /> : ""}
            {!user.mock ? <Dashboard userId={userId} score={user.score} userInformations={user.keyData} /> : ""}
        </main>
    ) : (
        ""
    );
};

export default Main;
