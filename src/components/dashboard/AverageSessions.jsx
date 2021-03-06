import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import User from "../../services/User";
import utils from "../../services/utils.js";

/**
 * This component displays the average sessions length chart of current week.
 *
 * @returns {React.FunctionComponent} - Nothing while the api has not responded, then Line chart with the average sessions length
 */
const AverageSessions = () => {
    const params = useParams();
    const userId = params.id;

    // sessions contain the user sessions length of the week. If there no data found, a mock data will be displayed.
    const [sessions, setSessions] = useState(false);

    useEffect(() => {
        const getData = async (user) => {
            const data = await user.getAverageSessions();
            if (!!data.error) {
                utils.displayMessageInModal(data.message);
                setSessions(utils.mocks.averageSessions);
            } else {
                setSessions(data);
            }
        };
        const user = new User(userId);
        getData(user);
    }, [userId]);

    return !sessions ? (
        ""
    ) : (
        <div id="averageSessions">
            <div className="title">
                <p>
                    Durée moyenne des
                    <br />
                    sessions
                </p>
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={sessions}>
                    <Line strokeDashArray="4 1 2" type="monotone" margin={{ top: 50, right: 20, bottom: 5, left: 0 }} aria-valuemax={500} dataKey="sessionLength" dot={false} stroke="#fff" strokeWidth="2" tickLine={false} />
                    <XAxis dataKey="day" stroke="#fff" tickLine={false} tickMargin={15} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

/**
 * Custom tooltip for the average sessions chart. We display the time in minutes.
 *
 * @param {Boolean} active - The active state of the tooltip.
 * @param {Array} payload - Contain data of the current day hovered.
 * @returns {HTMLElement} - The tooltip element.
 */
const CustomTooltip = ({ active, payload }) => {
    if (active) {
        const sessionLength = `${payload[0].payload.sessionLength} min`;
        return (
            <div className="custom-tooltip">
                <p className="label">{sessionLength}</p>
            </div>
        );
    }
};

export default AverageSessions;
