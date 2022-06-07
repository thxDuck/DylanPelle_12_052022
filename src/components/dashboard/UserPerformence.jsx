import React from 'react'
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;
const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]
const UserPerformences = () => {
    const data = {
        classname: "Perfomence",
        axes: [
            { axis: "Cardio", value: 200 },
            { axis: "Energie", value: 240 },
            { axis: "Endurance", value: 800 },
            { axis: "Force", value: 803 },
            { axis: "Vitesse", value: 220 },
            { axis: "Intensité", value: 110 }
        ]
    }
    return (
        <div id="userPerformence">
            <RD3Component data={data} />
        </div>
        // <div id="userPerformence">
        //     <Radar
        //         style={{
        //             width: "100%",
        //             height: "100%",
        //         }}
        //         width={200}
        //         height={200}
        //         padding={20}
        //         domainMax={300}
        //         highlighted={true}
        //         data={{
        //             variables: [
        //                 { key: "cardio", label: "Cardio" },
        //                 { key: "energy", label: "Energie" },
        //                 { key: "endurance", label: "Endurance" },
        //                 { key: "strength", label: "Force" },
        //                 { key: "speed", label: "Vitesse" },
        //                 { key: "intensity", label: "Intensité" }
        //             ],
        //             sets: [
        //                 {
        //                     key: "me",
        //                     label: "My Scores",
        //                     values: {
        //                         cardio: 200,
        //                         energy: 240,
        //                         endurance: 80,
        //                         strength: 80,
        //                         speed: 220,
        //                         intensity: 110
        //                     }
        //                 }
        //             ]
        //         }}
        //     />
        // </div>
    )
}

export default UserPerformences;