import userApi from "./userApi";


/**
 * Create a new user with id
 * 
 * @class User
 * @description User class, used to get data from the api
 * 
 */
export default class User {
    constructor(userId) {
        this.userId = userId;
        this.error = {
            error: true,
            message: ""
        }
    }

    /**
     * @description Get the user information. If user don't exist, return an error.
     * @returns {Promise<{firstName: string, lastName: string, age: number, score: number, keyData: {calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number}}>}
     */
    async getInformations() {
        const api = new userApi(this.userId);
        const user = await api.get("informations")
        if (!user) {
            this.error.message = "Ce profil n'a pas été trouvé.";
            this.error.message = "Ce profil n'a pas été trouvé.";
            return this.error;
        }
        const userInfos = user.userInfos;
        const formattedUser = {
            id: user.id,
            mock: false,
            firstName: userInfos.firstName,
            lastName: userInfos.lastName,
            age: userInfos.age,
            keyData: user.keyData,
        }
        formattedUser.score = !!user.score ? user.score : (!!user.todayScore ? user.todayScore : 0);
        return formattedUser
    }

    /**
     * @description Get the activities of week. If data doesn't find, return an error.
     * @returns {Promise<[{day: number, kilogram: number, calories: number}, ...]>}
     */
    async getActivities() {
        const api = new userApi(this.userId);
        const activities = await api.get("activities")
        if (!activities || !activities.sessions) {
            this.error.message = "Activités non trouvées.";
            return this.error;
        }
        const sessions = activities.sessions;
        sessions.forEach(session => {
            session.day = new Date(session.day).getDate();
        })
        return sessions;
    }
    /**
    * @description Get the sessions length of week. If data doesn't find, return an error.
    * @returns {Promise<[{day: string, sessionLength: number}, ...]>}
    */
    async getAverageSessions() {
        const DAYS = ["L", "M", "M", "J", "V", "S", "D"];
        const api = new userApi(this.userId);
        const averageSessions = await api.get("averageSessions")
        if (!averageSessions || !averageSessions.sessions) {
            this.error.message = "Sessions non trouvées.";
            return this.error;
        }
        averageSessions.sessions.forEach(session => {
            session.day = DAYS[session.day - 1]
        });
        return averageSessions.sessions;
    }

    /**
     * @description Get the performances of week. If data doesn't find, return an error.
     * @returns {Promise<[{value: number, kind: number, label: string}, ...]>}
     */
    async getPerformence() {
        const CATEGORIES = {
            intensity: "Intensité",
            speed: "Vitesse",
            strength: "Force",
            endurance: "Endurance",
            energy: "Energie",
            cardio: "Cardio",
        };
        const api = new userApi(this.userId);
        const performencesData = await api.get("performences")
        if (!performencesData) {
            this.error.message = "Performence non trouvées.";
            return this.error;
        }
        const categoriesNames = Object.keys(CATEGORIES);
        const kindDataArray = Object.values(performencesData.kind)
        const orderedPerformences = []
        for (let i = 0; i < categoriesNames.length; i++) {
            const cat = categoriesNames[i];
            const kindIndex = kindDataArray.findIndex(value => value === cat);
            const userData = performencesData.data.find(d => d.kind === kindIndex + 1);
            userData.label = CATEGORIES[cat];
            orderedPerformences.push(userData);
        }
        return orderedPerformences;
    }
}