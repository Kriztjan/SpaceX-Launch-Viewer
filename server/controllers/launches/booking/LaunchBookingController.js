let launches = [];

function bookLaunch(req, res) {
    launches.push(req.body)
    res.status(201).json(launches);
}

function removeLaunch(req, res) {
    const index = launches.findIndex(launch => +launch.id === +req.params.id)
    if (index === -1) {
        res.status(400).json({ error: `Failed to find launch booking with id of ${req.params.id}` })
        return
    }

    launches.splice(index, 1)
    res.status(200).json(launches)
}

function updateLaunch(req, res) {
    const launch = launches.find(launch => +launch.id === +req.params.id)
    if (!launch) {
        res.status(400).json({ error: `Failed to find launch booking with id of ${req.params.id}` })
        return
    }

    launch = req.body
    res.status(200).json(launches)
}

function getLaunchBookings(req, res) {
    res.status(200).json(launches)
}

module.exports = {
    bookLaunch,
    removeLaunch,
    updateLaunch,
    getLaunchBookings
}