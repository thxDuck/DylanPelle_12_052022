import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * This Pie chart contains completion the user objective in percentage. Need to get score property in a value between 0 and 100.
 * @returns {React.FunctionComponent} - Pie chart with objective completion percentage.
 */
const UserObjective = (props) => {
    const score = props.score;
    /**
     * To draw the pie chart, we need to find the percentage score and rest to get 100%.
     * (ex: score = 20%, rest = 80%, total 100%)
     */
    const rest = 100 - score;
    const percentage = score + "%";
    const data = [
        { name: "Score", value: score, fill: "#FF0000" },
        { name: "", value: rest, fill: "none" },
    ];
    return (
        <div id="userObjective">
            <div className="title">
                <p>Score</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie alignmentBaseline="center" data={data} isAnimationActive={true} cx="50%" cy="50%" endAngle={450} startAngle={90} autoReverse={true} innerRadius="75%" outerRadius="85%" fill="#8884d8" dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="label-objective">
                <p className="percentage">{percentage}</p>
                <p>De votre objectif</p>
            </div>
        </div>
    );
};
UserObjective.propTypes = {
    score: PropTypes.number.isRequired,
};

export default UserObjective;
