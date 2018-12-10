let launches = [];

let id = 0;

function bookLaunch(req, res) {
    req.body.id = id++;
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
    let index = launches.findIndex(launch => +launch.id === +req.params.id)
    if (index === -1) {
        res.status(400).json({ error: `Failed to find launch booking with id of ${req.params.id}` })
        return
    }

    for (let key in req.body) {
        launches[index][key] = req.body[key]
    }
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