import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav'
import BookingForm from './Form/BookingForm'
import './bookings.css';
import BookedLaunch from './Booked/BookedLaunch';

export default class LaunchBookings extends Component {

    constructor() {
        super()
        this.state = {
            launches: [],
            editing: false,
            index: -1,
            mounted: false
        }
    }

    componentDidMount() {
        axios.get("/api/bookings")
        .then(res => this.updateLaunches(res.data))
        .catch(error => console.log("An error occured while fetching booking data!", error))
    }

    toggleEdit = (id = -2) => {
        const index = this.state.launches.findIndex(launch => +launch.id === +id);
        if (index === -1 && id != -2) {
            console.log("Could not find launch with id of "+ id)
            return;
        }
        const editing = !this.state.editing;
        this.setState({ editing, index })
    }

    updateLaunches = launches => this.setState({ launches })

    removeLaunch = id => {
        axios.delete(`/api/bookings/${id}`)
        .then(res => this.updateLaunches(res.data))
        .catch(error => console.log("An error occured while deleting launch.", error))
    }

    render() {
        const launches = this.state.launches.map(launch => 
            <BookedLaunch 
                key={launch.id} 
                launch={launch}
                removeLaunch={this.removeLaunch}
                toggleEdit={this.toggleEdit}
                editing={this.state.editing}
            />
        )
        return (
            <div>
                <Nav page={2} />

                <div className="booking-container">
                    <h1>Launch Bookings</h1>
                </div>
                <div className="b-sub-1">
                    <BookingForm 
                        updateLaunches={this.updateLaunches}
                        editing={this.state.editing}
                        toggleEdit={this.toggleEdit}
                        launch={ this.state.editing ? this.state.launches[this.state.index] : null }
                    /> 
                    
                    <div className="b-sub-3">
                        <h2>My Bookings</h2>

                        <div className="b-sub-4">
                            { launches }
                        </div>
                    </div>
                </div>     
            </div>
        )
    }

}