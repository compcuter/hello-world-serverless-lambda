import axios from 'axios';

export default function getUser(username) {
    return new Promise(resolve => {
        axios.get(`https://api.github.com/users/${username}`)
        .then(function (response) {
          resolve({ message: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    })
};
