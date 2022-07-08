import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import utils from "../../services/utils.js";
import User from "../../services/User";

/**
 * This component displays the performance chart with values from the API.
 * @returns {React.FunctionComponent} - Nothing while the API has not responded, then Radar chart performances of the user.
 */
const UserPerformances = () => {
    const params = useParams();
    const userId = params.id;

    // Performances contain the user performance values. If there no data found, a mock data will be displayed.
    const [performances, setPerformances] = useState(false);

    useEffect(() => {
        const getData = async (user) => {
            const data = await user.getPerformances();
            if (!!data.error) {
                utils.displayMessageInModal(data.message);
                setPerformances(utils.mocks.performances);
            } else {
                setPerformances(data);
            }
        };
        const user = new User(userId);
        getData(user);
    }, [userId]);

    return !performances ? (
        ""
    ) : (
        <div id="userPerformances">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="100%" data={performances} margin={{ top: 0, right: 15, left: 15, bottom: 0 }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis axisLine={true} tickCount={4} dataKey="label" stroke="#fff" tickLine={false} />
                    {performances.map((perf, i) => (
                        <Radar key={i} name={perf.label} dataKey="value" fill="#FF0101" fillOpacity={0.2} padding={{ top: "15px" }} />
                    ))}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserPerformances;
