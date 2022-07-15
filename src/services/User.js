import UserApi from "./UserApi"

/**
 * @class User
 * @description Class constructed with a userId for API calls and formatted data for components.
 */
export default class User {
	/**
	 * @param {number} userId Id of user
	 */
	constructor(userId) {
		this.userId = userId;
		this.api = new UserApi(userId);
		this.error = {
			error: true,
			message: "",
		}
	}

	/**
	 * @description Get personal information of a user from API. Format elements before sending to the component. If data doesn't find, return an error.
	 * @returns {Promise<{firstName: string, lastName: string, age: number, score: number, keyData: {calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number}}>}
	 */
	async getInformations() {
		try {
			const user = await this.api.get("informations");
			const userInfos = user.userInfos;
			const formattedUser = {
				id: user.id,
				mock: false,
				firstName: userInfos.firstName,
				lastName: userInfos.lastName,
				age: userInfos.age,
			}
			let score = !!user.score ? user.score : !!user.todayScore ? user.todayScore : 0;
			score *= 100
			if (score < 0 || score > 100) {
				this.error.message = "Le score n'est pas valide.";
				return this.error;
			}

			formattedUser.score = score;
			formattedUser.keyData = this.formatKeyForCards(user.keyData);
			return formattedUser;

		} catch (error) {
			this.error.message = "Ce profil n'a pas été trouvé.";
			return this.error;
		}
	}

	/**
	 * @description Format nutriments data.
	 * @param {Array} keyData - Data of nutriment of user
	 * @returns {Array} Formatted data with the correct units and names
	 */
	formatKeyForCards(keyData) {
		const dataByKey = {
			calorieCount: {
				name: "Calories",
				unit: "kCal",
				id: "calories",
				icon: "caloriesIcon",
			},
			proteinCount: {
				name: "Protéines",
				unit: "g",
				id: "protein",
				icon: "proteinIcon",
			},
			carbohydrateCount: {
				name: "Glucides",
				unit: "g",
				id: "carb",
				icon: "carbohydrateIcon",
			},
			lipidCount: {
				name: "Lipides",
				unit: "g",
				id: "lipid",
				icon: "lipidIcon",
			},
		};
		const keyNames = Object.keys(dataByKey);
		let data = []
		keyNames.forEach((key) => (
			data.push({
				...dataByKey[key],
				value: keyData[key],
			})
		))
		return data;
	}
	/**
	 * @description Get the activities of week from API. Format day like the number of day of the week. If data doesn't find, return an error.
	 * @returns {Array.Promise<{day: number, kilogram: number, calories: number}>}
	 */
	async getActivities() {
		try {
			const activities = await this.api.get("activities")
			const row_sessions = activities.sessions;

			return row_sessions.map((session) => {
				const formattedDay = new Date(session.date).getDay()
				return { ...session, formattedDay }
			});

		} catch (error) {
			this.error.message = "Activités non trouvées."
			return this.error
		}
	}

	/**
	 * @description Get the sessions length of week from API. If data doesn't find, return an error.
	 * @returns {Array.Promise<{day: string, sessionLength: number}>}
	 */
	async getAverageSessions() {
		try {
			const DAYS = ["L", "M", "M", "J", "V", "S", "D"]
			const averageSessions = await this.api.get("averageSessions");

			return DAYS.map((day, i) => {
				const session = averageSessions.sessions.find(s => s.day === i + 1)
				return { ...session, day: DAYS[i] }
			});

		} catch (error) {
			this.error.message = "Sessions non trouvées."
			return this.error
		}
	}

	/**
	 * @description Get the performances of week from API. Sorts the data to have the best order to display them in the chart. If data doesn't find, return an error.
	 * @returns {Array.Promise<{value: number, kind: number, label: string}>}
	 */
	async getPerformances() {
		const CATEGORIES = {
			intensity: "Intensité",
			speed: "Vitesse",
			strength: "Force",
			endurance: "Endurance",
			energy: "Energie",
			cardio: "Cardio",
		}
		try {
			const performancesData = await this.api.get("performances")
			if (!performancesData) {
			}
			const categoriesNames = Object.keys(CATEGORIES)
			const kindDataArray = Object.values(performancesData.kind)
			const orderedPerformances = []
			for (let i = 0; i < categoriesNames.length; i++) {
				const cat = categoriesNames[i]
				const kindIndex = kindDataArray.findIndex((value) => value === cat)
				const userData = performancesData.data.find((d) => d.kind === kindIndex + 1)
				userData.label = CATEGORIES[cat]
				orderedPerformances.push(userData)
			}
			return orderedPerformances;

		} catch (error) {
			this.error.message = "Performances non trouvées."
			return this.error
		}
	}
}
