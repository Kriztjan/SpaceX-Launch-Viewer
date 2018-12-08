require('dotenv').config()
const express = require('express')
const { json } = require('body-parser')
const roadsterController = require('./controllers/roadster/RoadsterController')
const launchController = require('./controllers/launches/LaunchController')
const bookingController = require('./controllers/launches/booking/LaunchBookingController')
const app = express()

app.use(json())

// roadster
app.get("/api/roadster", roadsterController.getInfo)

// launches
app.get("/api/launches", launchController.getLaunches)
app.get("/api/launches/upcoming", launchController.getUpcomingLaunches)
app.get("/api/launches/latest", launchController.getLatestLaunch)
app.get("/api/launches/:id", launchController.getLaunch)

// bookings
app.get("/api/bookings", bookingController.getLaunchBookings)
app.post("/api/bookings", bookingController.bookLaunch)
app.put("/api/bookings/:id", bookingController.updateLaunch)
app.delete("/api/bookings/:id", bookingController.removeLaunch)

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}...`))