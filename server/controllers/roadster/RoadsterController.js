require('dotenv').config()
const axios = require('axios')

const getInfo = (req, res) => {
    axios.get(`${process.env.API_URL}roadster`)
    .then(response => res.status(200).json(response.data))
    .catch(err => console.log(`An error occured while fetching roadster data!`, err))
}

module.exports = {
    getInfo
}