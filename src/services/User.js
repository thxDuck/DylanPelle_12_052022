import userApi from "./userApi";



export default class User {
    constructor(userId) {
        this.userId = userId;
        this.error = {
            error: true,
            message: ""
        }
    }

    async getInformations() {
        const user = await userApi.get.informations(this.userId);
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


    async getActivities() {
        const activities = await userApi.get.activities(this.userId);
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


    async getAverageSessions() {
        const DAYS = ["L", "M", "M", "J", "V", "S", "D"];
        const averageSessions = await userApi.get.averageSessions(this.userId);
        if (!averageSessions || !averageSessions.sessions) {
            this.error.message = "Sessions non trouvées.";
            return this.error;
        }
        averageSessions.sessions.forEach(session => {
            session.day = DAYS[session.day - 1]
        })
        return averageSessions.sessions;
    }


    async getPerformence() {
        const CATEGORIES = {
            intensity: "Intensité",
            speed: "Vitesse",
            strength: "Force",
            endurance: "Endurance",
            energy: "Energie",
            cardio: "Cardio",
        };
        const performencesData = await userApi.get.performences(this.userId);
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
        console.log('orderedPerformences => ', orderedPerformences);
        return orderedPerformences;
    }
}