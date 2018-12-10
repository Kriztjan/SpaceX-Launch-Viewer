import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav'
import './roadster.css'

export default class Roadster extends Component {

    constructor() {
        super()
        this.state = {
            data: null,
            error: false
        }
    }

    componentDidMount() {
        axios.get("/api/roadster")
        .then(res => {
            const { launch_date_utc, speed_mph, earth_distance_mi, mars_distance_mi, details } = res.data;
            const data = { launch_date_utc, speed_mph, earth_distance_mi, mars_distance_mi, details }
            this.setState({ data })
        })
        .catch(error => console.log("Error occured while loading roadster data", error) || this.setState({ error: true }))
    }

    render() {
        return (
            <div>
                <Nav page={0} />

                <div className="roadster-container">
                    <h1>Roadster Information</h1>
                </div>
                <div className="rc-sub-1">
                    <div className="rc-sub-2">
                        {
                            this.state.error ? "An error occured while loading roadster data."
                            : !this.state.data ? "Loading..."
                            :
                            <Info data={this.state.data} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Info = props => {
    return (
        <div className="rc-sub-info">
            <p><span>Launch Date: </span> {props.data.launch_date_utc}</p>
            <p><span>Speed (mph): </span> {props.data.speed_mph}</p>
            <p><span>Distance from earth (miles): </span> {props.data.earth_distance_mi}</p>
            <p><span>Distance from Mars (miles): </span> {props.data.mars_distance_mi}</p>
            <span>Details: </span>
            <div className="rc-sub-details">
                <p>{props.data.details}</p>
            </div>
        </div>
    )
}