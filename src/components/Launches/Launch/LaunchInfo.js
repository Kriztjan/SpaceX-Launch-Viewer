import React, { Component } from 'react'
import Nav from '../../Nav/Nav'
import axios from 'axios';

export default class LaunchInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            launch: null
        }
    }

    componentDidMount() {
        axios.get("/api/launches/"+ this.props.match.params.id)
        .then(res => this.setState({ launch: res.data }))
        .catch(err => console.log("Error while fetching launch data", err))
    }

    render() {
        const launch = this.state.launch;
        console.log(launch)
        return (
            <div>
                <Nav page={1} />

                <div className="launches-container">
                    <h1>{ !launch ? "Loading..." : launch.mission_name }</h1>
                </div>  
                <div className="l-sub-10">
                    {
                        !launch ? "Loading..." : <Info launch={launch} />
                    }
                </div>
            </div>
        )
    }

}

const Info = props => {
    const launch = props.launch;
    return (
        <div className="l-sub-9">
            <div className="mission-patch">
                <img src={launch.links.mission_patch_small} />
            </div>

            <div className="l-info">
                <div className="l-info-1">
                    <iframe src={launch.links.video_link.replace("watch?v=", "embed/")} />
                    <div className="l-info-detail">
                        <p>{launch.details}</p>
                    </div>
                    <a href="#/launches">Back</a>
                </div>
            </div>
        </div>
    )
}