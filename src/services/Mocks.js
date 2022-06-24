const Mocks = {
    userInformation: {
        mock: true,
        firstName: "",
        lastName: "",
        age: 0,
        score: 0,
        keyData: {
            calorieCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
            proteinCount: 0,
        },
    },
    activities: {
        sessions: [
            { day: "2020-01-01", kilogram: 0, calories: 0 },
            { day: "2020-01-02", kilogram: 0, calories: 0 },
            { day: "2020-01-03", kilogram: 0, calories: 0 },
            { day: "2020-01-04", kilogram: 0, calories: 0 },
            { day: "2020-01-05", kilogram: 0, calories: 0 },
            { day: "2020-01-06", kilogram: 0, calories: 0 },
            { day: "2020-01-07", kilogram: 0, calories: 0 },
        ]
    },
    averageSessions: [
        { day: "L", sessionLength: 0 },
        { day: "M", sessionLength: 0 },
        { day: "M", sessionLength: 0 },
        { day: "J", sessionLength: 0 },
        { day: "V", sessionLength: 0 },
        { day: "S", sessionLength: 0 },
        { day: "D", sessionLength: 0 },
    ],
    performences: {
        data: [
            { value: 0, kind: 1, label: "Cardio" },
            { value: 0, kind: 2, label: "Energie" },
            { value: 0, kind: 3, label: "Endurance" },
            { value: 0, kind: 4, label: "Force" },
            { value: 0, kind: 5, label: "Vitesse" },
            { value: 0, kind: 6, label: "Intensité" },
        ],
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
        },
    }
}

export default Mocks;