import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Launch from './Launch/Launch'

import './launches.css'

export default class Launches extends Component {

    constructor() {
        super()
        this.state = {
            year: "2018",
            block: null,
            launches: []
        }
    }

    getQuery = () => {
        let query = ""
        if (this.state.year) {
            if (!query) {
                query += "?"
            }

            query += `launch_year=${this.state.year}`
        }

        if (this.state.block) {
            query += !query ? "?" : "&"

            query += `block=${this.state.block}`
        }

        console.log()
        return query;
    }

    componentDidMount() {
        console.log(this.state.year)
        axios.get("/api/launches"+ this.getQuery())
        .then(res => {
            this.setState({ launches: res.data })
            // console.log(res.data)
        })
        .catch(error => console.log("error while fetching launch data", error))
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.year != this.state.year) || prevState.block != this.state.block) {
            axios.get("/api/launches"+ this.getQuery())
            .then(res => {
                this.setState({ launches: res.data })
                // console.log(res.data)
            })
            .catch(error => console.log("error while fetching launch data", error))
        }
    }

    updateYear = e => {
        this.setState({ year: e.target.value })
        // console.log(e.target.value)
    }

    updateBlock = e => {
        this.setState({ block: e.target.value === "all" ? null : e.target.value })
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        const years = [];

        years.push( <option key={currentYear + 1} onChange={this.updateYear} value={currentYear + 1}>{currentYear + 1}</option>)
        years.push( <option key={currentYear} onChange={this.updateYear} value={currentYear}>{currentYear}</option>)

        for (let year = currentYear - 1; year >= 2006; year--) {
            years.push( <option key={year} onChange={this.updateYear} value={year}>{year}</option> )
        }

        let launches = []
        
        if (this.state.launches[0]) {
            launches = this.state.launches.map(launch => (
                <Launch key={launch.flight_number} launch={launch} />
            ))
        }

        return(
            <div>
                <Nav page={1} />

                <div className="launches-container">
                    <h1>Launches</h1>
                </div>

                <div className="l-sub-1">
                   <div className="l-sub-4">
                        <div className="l-sub-2">
                            <div className="l-filters">
                                <h3>Filters</h3>
                                <div className="l-sub-3">
                                    <label>Year: </label>
                                    <select className="l-select" onChange={this.updateYear} defaultValue={currentYear}>
                                        { years }
                                    </select>
                                    <label>Block: </label>
                                    <select className="l-select"  onChange={this.updateBlock} defaultValue="all">
                                        <option value="all">All</option>
                                        <option value="5">Block 5</option>
                                        <option value="4">Block 4</option>
                                        <option value="3">Block 3</option>
                                        <option value="2">Block 2</option>
                                        <option value="1">Block 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="l-sub-5">
                            { launches }
                        </div>
                   </div>
                </div>
            </div>
        )
    }

}