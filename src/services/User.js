import UserApi from "./UserApi"

/**
 * @class User
 * @description Used for api calls and format data for components.Make sure to call the constructor with the user id.
 */
export default class User {
	/**
	 * @param {number} userId Id of user
	 */
	constructor(userId) {
		this.userId = userId
		this.error = {
			error: true,
			message: "",
		}
	}

	/**
	 * @description Get personnal information of user from api. Format elements before send to component. If data doesn't find, return an error.
	 * @returns {Promise<{firstName: string, lastName: string, age: number, score: number, keyData: {calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number}}>}
	 */
	async getInformations() {
		const api = new UserApi(this.userId)
		try {
			const user = await api.get("informations")
			const userInfos = user.userInfos
			const formattedUser = {
				id: user.id,
				mock: false,
				firstName: userInfos.firstName,
				lastName: userInfos.lastName,
				age: userInfos.age,
				keyData: user.keyData,
			}
			formattedUser.score = !!user.score ? user.score : !!user.todayScore ? user.todayScore : 0
			return formattedUser
		} catch (error) {
			this.error.message = "Ce profil n'a pas été trouvé."
			this.error.message = "Ce profil n'a pas été trouvé."
			return this.error
		}
	}

	/**
	 * @description Get the activities of week from api. Format day like the number of day of the week. If data doesn't find, return an error.
	 * @returns {Array.Promise<{day: number, kilogram: number, calories: number}>}
	 */
	async getActivities() {
		try {
			const api = new UserApi(this.userId)
			const activities = await api.get("activities")
			if (!activities || !activities.sessions) {
			}
			const sessions = activities.sessions
			sessions.forEach((session) => {
				session.day = new Date(session.day).getDate()
			})
			return sessions
		} catch (error) {
			this.error.message = "Activités non trouvées."
			return this.error
		}
	}
	/**
	 * @description Get the sessions length of week from api. If data doesn't find, return an error.
	 * @returns {Array.Promise<{day: string, sessionLength: number}>}
	 */
	async getAverageSessions() {
		try {
			const DAYS = ["L", "M", "M", "J", "V", "S", "D"]
			const api = new UserApi(this.userId)
			const averageSessions = await api.get("averageSessions")
			averageSessions.sessions.forEach((session) => {
				session.day = DAYS[session.day - 1]
			})
			return averageSessions.sessions
		} catch (error) {
			this.error.message = "Sessions non trouvées."
			return this.error
		}
	}

	/**
	 * @description Get the performances of week from api. Sorts the data to have the best order to display them in the chart. If data doesn't find, return an error.
	 * @returns {Array.Promise<{value: number, kind: number, label: string}>}
	 */
	async getPerformence() {
		const CATEGORIES = {
			intensity: "Intensité",
			speed: "Vitesse",
			strength: "Force",
			endurance: "Endurance",
			energy: "Energie",
			cardio: "Cardio",
		}
		try {
			const api = new UserApi(this.userId)
			const performencesData = await api.get("performences")
			if (!performencesData) {
			}
			const categoriesNames = Object.keys(CATEGORIES)
			const kindDataArray = Object.values(performencesData.kind)
			const orderedPerformences = []
			for (let i = 0; i < categoriesNames.length; i++) {
				const cat = categoriesNames[i]
				const kindIndex = kindDataArray.findIndex((value) => value === cat)
				const userData = performencesData.data.find((d) => d.kind === kindIndex + 1)
				userData.label = CATEGORIES[cat]
				orderedPerformences.push(userData)
			}
			return orderedPerformences
		} catch (error) {
			this.error.message = "Performence non trouvées."
			return this.error
		}
	}
}
