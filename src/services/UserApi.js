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
            performences: "/performance",
        };
    }

    /**
     * With this method, you can call api to get datas.
     * 
     * @param {String}  type - The type of data you want => informations, activities, averageSessions, performences.
     * @returns {Promise<any>} - Response of api
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