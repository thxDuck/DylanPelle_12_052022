import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../partials/header/Header";
import Dashboard from "../dashboard/Dashboard";

import utils from "../../services/utils.js";
import User from "../../services/User";

const Main = () => {
    const params = useParams();
    const userId = params.id;
    // user contains the user informations. If user not found, an error will be displayed and page gender with mocked data.
    const [user, setUser] = useState(utils.mocks.userInformation);

    // set monted true when we receive a response from the api
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const getData = async (user) => {
            const data = await user.getInformations();
            setMounted(true);
            if (!!data.error) {
                utils.displayMessageInModal(data.message, true);
                setUser(utils.mocks.userInformation);
            } else {
                setUser(data);
            }
        };
        const user = new User(userId);
        getData(user);
    }, [userId]);
    console.log(user);
    return !user ? (
        ""
    ) : (
        <main>
            {mounted ? <Header name={user.firstName} mock={user.mock} /> : ""}
            {!user.mock ? <Dashboard userId={userId} score={user.score} userInformations={user.keyData} /> : ""}
        </main>
    );
};
Main.propTypes = {
    userId: PropTypes.number,
    score: PropTypes.number,
    userInformations: PropTypes.number,
};
export default Main;
