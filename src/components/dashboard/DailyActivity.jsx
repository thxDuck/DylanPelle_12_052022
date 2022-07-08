import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import utils from "../../services/utils.js";
import User from "../../services/User";

/**
 * This component displays the daily activity chart with values from the API.
 * @returns {React.FunctionComponent} - Nothing while the api has not responded, then bar chart with the daily weight and calories burned of current week.
 */
const DailyActivity = () => {
    const params = useParams();
    const userId = params.id;

    // Activities contains the user activities of the week. If there no data found, a mock data will be displayed.
    const [activities, setActivities] = useState(utils.mocks.activities);

    useEffect(() => {
        const getActivities = async (user) => {
            const activitiesData = await user.getActivities();
            if (!!activitiesData.error) {
                utils.displayMessageInModal(activitiesData.message);
                setActivities(utils.mocks.activities);
            } else {
                setActivities(activitiesData);
            }
        };
        const user = new User(userId);
        getActivities(user);
    }, [userId]);

    return !activities ? (
        ""
    ) : (
        <div id="dailyActivity">
            <div className="title">
                <p>Activité quotidienne</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={activities}
                    barSize={7}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 15,
                    }}
                >
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconSize={8}
                        iconType="circle"
                        height={40}
                        payload={[
                            { id: "legend-kg", value: "Poids (kg)", type: "circle", color: "#282D30" },
                            { id: "legend-cal", value: "Calories brûlées (kCal)", type: "circle", color: "#E60000" },
                        ]}
                    />
                    <XAxis dataKey="formattedDay" tickMargin="15" />
                    <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={true} type="number" domain={["dataMin - 2", "dataMax + 2"]} tickCount="4" />
                    <YAxis yAxisId="left" orientation="left" hide={true} />
                    <CartesianGrid vertical={false} />
                    <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
                    <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyActivity;

/**
 * Custom tooltip for the daily activity chart. We display the weight and the calories burned.
 *
 * @param {Boolean} active - The active state of the tooltip.
 * @param {Array} payload - Contains data of the current bar hovered.
 * @returns {HTMLElement} - The tooltip element.
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length > 0) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].payload.kilogram || 0}kg`}</p>
                <p>{`${payload[0].payload.calories || 0}Kcal`}</p>
            </div>
        );
    }
};
