import config from './config.json';
const userApi = {
    get: {
        informations: async (userId) => {
            return fetch(`${config.baseUrl}/user/${userId}`)
                .then(response => response.json())
                .then(json => {
                    return json.data
                })
                .catch(err => err);
        },
        activities: async (userId) => {
            return fetch(`${config.baseUrl}/user/${userId}/activity`)
                .then(response => response.json())
                .then(json => {
                    return json.data
                })
                .catch(err => err);
        },
        averageSessions: async (userId) => {
            return fetch(`${config.baseUrl}/user/${userId}/average-sessions`)
                .then(response => response.json())
                .then(json => {
                    return json.data
                })
                .catch(err => err);
        },
        performences: async (userId) => {
            return fetch(`${config.baseUrl}/user/${userId}/performance`)
                .then(response => response.json())
                .then(json => {
                    return json.data
                })
                .catch(err => err);
        }
    }
}

export default userApi;

