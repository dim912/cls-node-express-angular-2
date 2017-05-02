
// Create new comment in your database and return its id

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

exports.all = function (cb) {
    axios.get(`${API}/posts`)
        .then(posts => {
            cb(null, posts)
        })
        .catch(error => {
            cb('Err')
        });
}
