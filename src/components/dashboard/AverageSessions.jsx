import React from "react"
import {LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis} from "recharts"
// https://recharts.org/en-US/api/LineChart
// const USER_AVERAGE_SESSIONS = [
//     {
//         userId: 12,
//         sessions: [
//             {
//                 day: 1,
//                 sessionLength: 30
//             },
//             {
//                 day: 2,
//                 sessionLength: 23
//             },
//             {
//                 day: 3,
//                 sessionLength: 45
//             },
//             {
//                 day: 4,
//                 sessionLength: 50
//             },
//             {
//                 day: 5,
//                 sessionLength: 0
//             },
//             {
//                 day: 6,
//                 sessionLength: 0
//             },
//             {
//                 day: 7,
//                 sessionLength: 60
//             }
//         ]
//     },
//     {
//         userId: 18,
//         sessions: [
//             {
//                 day: 1,
//                 sessionLength: 30
//             },
//             {
//                 day: 2,
//                 sessionLength: 40
//             },
//             {
//                 day: 3,
//                 sessionLength: 50
//             },
//             {
//                 day: 4,
//                 sessionLength: 30
//             },
//             {
//                 day: 5,
//                 sessionLength: 30
//             },
//             {
//                 day: 6,
//                 sessionLength: 50
//             },
//             {
//                 day: 7,
//                 sessionLength: 50
//             }
//         ]
//     }
// ]

const AverageSessions = () => {
	const data = [
		{
			name: "L",
			avg: 30,
			label: "Foo",
		},
		{
			name: "M",
			avg: 40,
		},
		{
			name: "M",
			avg: 50,
		},
		{
			name: "J",
			avg: 30,
		},
		{
			name: "V",
			avg: 30,
		},
		{
			name: "S",
			avg: 50,
		},
		{
			name: "D",
			avg: 50,
		},
	]
	return (
		<div id="averageSessions">
            <LineChart width={600} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}  data={data} style={{"background-color": "red;"}}>
				<Line type="natural" dataKey="avg" stroke="#8884d8" strokeWidth="4" />
				{/* <CartesianGrid stroke="#FF0000" fill="#FF0000" /> */}
				{/* <XAxis dataKey="name" /> */}
				<XAxis dataKey="name" />
				{/* <YAxis /> */}
				<Tooltip />
                
			</LineChart>
		</div>
	)
}

export default AverageSessions
