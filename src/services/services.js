const config = require('./config.json');

const Services = {

    getUserInfo: async (userId, callback) => {
        await fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                callback(response.data)
                return response.data;
            })
        .catch(error => console.log(error));
    }
        


//     http://localhost:3000/user/${userId}
// http://localhost:3000/user/${userId}/activity
// http://localhost:3000/user/${userId}/average-sessions
// http://localhost:3000/user/${userId}/performance



}
export default Services;
