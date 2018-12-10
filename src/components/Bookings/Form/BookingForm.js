import React, { Component } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

export default class BookingForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            date: "",
            rocket: "",
            details: ""
        }
    }

    componentDidUpdate(previousProps) {
        // console.log("editing:", this.props.editing, "prev=", this.previousProps.editing)
        if (this.props.editing && !previousProps.editing) {
             this.setState({
                name: this.props.launch.name,
                date: this.props.launch.date,
                rocket: this.props.launch.rocket,
                details: this.props.launch.details
            })
        }
    }

    componentDidMount() {
        // console.log("we didS")
        if (this.props.editing) {
            console.log("we didS")
            // this.setState({
            //     name: this.props.launch.name,
            //     date: this.props.launch.date,
            //     rocket: this.props.launch.rocket,
            //     details: this.props.launch.details
            // })
        }
    }

    updateName = e => this.setState({ name: e.target.value })

    updateDate = e => this.setState({ date: e.target.value })

    updateRocket = e => this.setState({ rocket: e.target.value })

    updateDetails = e => this.setState({ details: e.target.value })

    cancel = () => {
        this.props.toggleEdit()
        this.setState({
            name: "",
            date: "",
            rocket: "",
            details: ""
        })
    }

    submit = e => {
        e.preventDefault();
        const { name, date, rocket, details } = this.state;
        if (this.props.editing) {
            axios.put("/api/bookings/"+ this.props.launch.id, { name, date, rocket, details })
            .then(res => {
                this.setState({
                    name: "",
                    date: "",
                    rocket: "",
                    details: ""
                })

                this.props.updateLaunches(res.data)
                this.props.toggleEdit()
                toast.success("Successfully booked your launch!")
            })
            .catch(error => console.log("Error while updating launch data!", error))
        }
        else {
            axios.post("/api/bookings", { name, date, rocket, details })
            .then(res => { 
                this.setState({
                    name: "",
                    date: "",
                    rocket: "",
                    details: ""
                })

                this.props.updateLaunches(res.data)
                toast.success("Successfully booked your launch!")
            })
            .catch(error => toast.error("An error occured while booking your launch."))
        }
    }

    render() {
        return (
            <form className="b-sub-2" onSubmit={this.submit}>
                <label>Misson Name: </label>
                <input onChange={this.updateName} value={this.state.name} required placeholder="Misssion name..." />

                <label>Launch Date: </label> 
                <input onChange={this.updateDate} value={this.state.date} required type="date" />

                <label>Rocket: </label>
                <select onChange={this.updateRocket} value={this.state.rocket}>
                    <option value="Falcon 9">Falcon 9</option>
                    <option value="Falcon Heavy">Falcon Heavy</option>
                </select>

                <label>Misson Details: </label>
                <textarea onChange={this.updateDetails} value={this.state.details} required placeholder="Mission details.." />

                <div className="b-sub-8">
                    <input type="submit"/>

                    <button
                        type="button"
                        value="cancel"
                        style={ !this.props.editing ? { visibility: "hidden" } : { visibility: "visible" } }
                        onClick={this.cancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        )
    }

}