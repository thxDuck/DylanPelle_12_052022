import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import utils from "../../services/utils.js";
import User from "../../services/User";

/**
 * 
 * @returns {React.FunctionComponent} - Nothing while the api has not responded, then Radar chart with performence of user.
 */
const UserPerformences = () => {
    const params = useParams();
    const userId = params.id;

    // performences contains the user performences values. If there no data found, a mock data will be displayed.
    const [performences, setPerformences] = useState(false);

    useEffect(() => {
        const getData = async (user) => {
            const data = await user.getPerformence();
            if (!!data.error) {
                utils.displayMessageInModal(data.message);
                setPerformences(utils.mocks.performences);
            } else {
                setPerformences(data);
            }
        };
        const user = new User(userId);
        getData(user);
    }, [userId]);

    return !performences ? (
        ""
    ) : (
        <div id="userPerformence">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="100%" data={performences} margin={{ top: 0, right: 15, left: 15, bottom: 0 }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis axisLine={true} tickCount={4} dataKey="label" stroke="#fff" tickLine={false} />
                    {performences.map((perf, i) => (
                        <Radar key={i} name={perf.label} dataKey="value" fill="#FF0101" fillOpacity={0.2} padding={{ top: "15px" }} />
                    ))}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserPerformences;
