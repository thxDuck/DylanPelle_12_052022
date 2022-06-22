const config = require('./config.json');

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
        console.log('here => ', userId);
        
        await fetch(`${config.baseUrl}/user/${userId}/performance`)
            .then(response => response.json())
            .then(response => {
                callback(response.data)
                return response.data;
            })
        .catch(error => console.log(error));
    },
        


//     http://localhost:3000/user/${userId}
// http://localhost:3000/user/${userId}/activity
// http://localhost:3000/user/${userId}/average-sessions
// http://localhost:3000/user/${userId}/performance



}
export default Services;
