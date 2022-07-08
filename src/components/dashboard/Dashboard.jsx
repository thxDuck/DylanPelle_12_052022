import React from "react";
import PropTypes from "prop-types";

import DailyActivity from "./DailyActivity.jsx";
import AverageSessions from "./AverageSessions.jsx";
import UserPerformances from "./UserPerformances.jsx";
import UserObjective from "./UserObjective.jsx";
import UserInformations from "./UserInformations.jsx";

/**
 * This is the component that contains all charts and information about the user.
 *
 * @returns {React.FunctionComponent} - Nothing while the api has not responded, then Line chart with the average session length
 */
const Dashboard = (props) => {
    const score = props.score;
    const userInformations = props.userInformations;

    return (
        <section id="dashboard">
            <div className="container">
                <DailyActivity />
                <div className="bottom-row">
                    <AverageSessions />
                    <UserPerformances />
                    <UserObjective score={score} />
                </div>
            </div>
            <UserInformations userInformations={userInformations} />
        </section>
    );
};

Dashboard.propTypes = {
    score: PropTypes.number.isRequired,
    userInformations: PropTypes.array.isRequired,
};

export default Dashboard;
