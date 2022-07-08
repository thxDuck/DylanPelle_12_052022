import config from './config.json';


/**
 * @class UserApi
 * @description Class to call the api of the user.
 */
export default class UserApi {
    constructor(userId) {
        this.userId = userId;
        this.url = `${config.baseUrl}/user/${this.userId}`;
        this.urlRequests = {
            informations: "",
            activities: "/activity",
            averageSessions: "/average-sessions",
            performances: "/performance",
        };
    }

    /**
     * With this method, you can call the API to get data.
     * 
     * @param {String}  type - The type of data you want => informations, activities, averageSessions, performances.
     * @returns {Promise<any>} - Response of API
     */
    async get(type) {
        const requestUrl = this.url + this.urlRequests[type];
        return fetch(requestUrl)
            .then(response => response.json())
            .then(json => {
                return json.data
            })
            .catch(err => err);
    }
}