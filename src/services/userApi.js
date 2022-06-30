import config from './config.json';


/**
 * This class is used to call the user API.
 */
export default class Api {
    constructor(userId) {
        this.userId = userId;
        this.url = `${config.baseUrl}/user/${this.userId}`;
        this.urlRequests = {
            informations: "",
            activities: "/activity",
            averageSessions: "/average-sessions",
            performences: "/performance",
        };
    }

    /**
     * With this method, you can call api to get datas.
     * 
     * @param {String}  type - The type of data you want => informations, activities, averageSessions, performences.
     * @returns 
     */
    async get(type) {
        const resuestUrl = this.url + this.urlRequests[type];
        return fetch(resuestUrl)
            .then(response => response.json())
            .then(json => {
                return json.data
            })
            .catch(err => err);
    }
}