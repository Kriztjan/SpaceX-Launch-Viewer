const axios = require('axios')

function getFilters(query) {
    let filters = ""
    for (let key in query) {
        if (query[key]) {
            filters += !filters ? "?" : "&"

            filters += `${key}=${query[key]}`
        }
    }

    return filters;
}

function getLaunches(req, res) {
    axios.get(process.env.API_URL + `launches${getFilters(req.query)}`)
    .then(response => res.status(200).json(response.data))
    .catch(error => {
        console.log("An error occured while fetching launch data ", error)
        res.status(400).json({ error })
    })
}

function getUpcomingLaunches(req, res) {
    axios.get(process.env.API_URL +"launches/upcoming")
    .then(response => res.status(200).json(response.data))
    .catch(error => {
        console.log("An error occured while fetching upcoming launch data ", error)
        res.status(400).json({ error })
    })
}

function getLatestLaunch(req, res) {
    axios.get(process.env.API_URL +"launches/latest")
    .then(response => res.status(200).json(response.data))
    .catch(error => {
        console.log("An error occured while fetching latest launch data ", error)
        res.status(400).json({ error })
    })
}

function getLaunch(req, res) {
    axios.get(process.env.API_URL +`launches/${req.params.id}`)
    .then(response => res.status(200).json(response.data))
    .catch(error => {
        console.log(`An error occured while fetching launch data with id of ${req.params.id}`, error)
        res.status(400).json({ error })
    })
}

module.exports = {
    getLaunches,
    getUpcomingLaunches,
    getLatestLaunch,
    getLaunch
}