const mocks = {
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
    activities: [
        { day: 1, kilogram: 0, calories: 0 },
        { day: 2, kilogram: 0, calories: 0 },
        { day: 3, kilogram: 0, calories: 0 },
        { day: 4, kilogram: 0, calories: 0 },
        { day: 5, kilogram: 0, calories: 0 },
        { day: 6, kilogram: 0, calories: 0 },
        { day: 7, kilogram: 0, calories: 0 },
    ],

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

export default mocks;