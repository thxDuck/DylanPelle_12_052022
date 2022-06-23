const config = require('./config.json');

// TODO : Doc
// TODO : Proptypes ?

const Services = {
    getUserInfo: async (userId, callback) => {
        await fetch(`${config.baseUrl}/user/${userId}`)
            .then(response => response.json())
            .then(response => {
                callback(response.data)
                return response.data;
            })
            .catch(error => console.log(error));
    },
    getDailyActivity: async (userId, callback) => {
        await fetch(`${config.baseUrl}/user/${userId}/activity`)
            .then(response => response.json())
            .then(response => {
                callback(response.data)
                return response.data;
            })
            .catch(error => console.log(error));
    },
    getSessions: async (userId, callback) => {
        await fetch(`${config.baseUrl}/user/${userId}/average-sessions`)
            .then(response => response.json())
            .then(response => {
                callback(response.data)
                return response.data;
            })
            .catch(error => console.log(error));
    },
    getPerformence: async (userId, callback) => {
        await fetch(`${config.baseUrl}/user/${userId}/performance`)
            .then(response => response.json())
            .then(response => {
                callback(response.data)
                return response.data;
            })
            .catch(error => console.log(error));
    },


}
export default Services;
