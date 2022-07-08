/**
 * Mocked personal information about user.
 */
const mocked_userInformation = {
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
}

/**
 * Mocked activities of user. Used for the daily bar graph.
 */
const mocked_activities = [
    { day: 1, kilogram: 0, calories: 0 },
    { day: 2, kilogram: 0, calories: 0 },
    { day: 3, kilogram: 0, calories: 0 },
    { day: 4, kilogram: 0, calories: 0 },
    { day: 5, kilogram: 0, calories: 0 },
    { day: 6, kilogram: 0, calories: 0 },
    { day: 7, kilogram: 0, calories: 0 },
];

/**
 * Mocked activities of user. Used for average-sessions line chart.
 */
const mocked_averageSessions = [
    { day: "L", sessionLength: 0 },
    { day: "M", sessionLength: 0 },
    { day: "M", sessionLength: 0 },
    { day: "J", sessionLength: 0 },
    { day: "V", sessionLength: 0 },
    { day: "S", sessionLength: 0 },
    { day: "D", sessionLength: 0 },
]

/**
 * Mocked performances of user. Used for performances line chart.
 */
const mocked_performances = [
    { value: 0, kind: 6, label: "Intensité" },
    { value: 0, kind: 5, label: "Vitesse" },
    { value: 0, kind: 4, label: "Force" },
    { value: 0, kind: 3, label: "Endurance" },
    { value: 0, kind: 2, label: "Energie" },
    { value: 0, kind: 1, label: "Cardio" },
]



/**
 * This is mocked data used if api doesn't find valid data for userId.
 */
const mocks = {
    userInformation: mocked_userInformation,
    activities: mocked_activities,
    averageSessions: mocked_averageSessions,
    performances: mocked_performances,
}

export default mocks;