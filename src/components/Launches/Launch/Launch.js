import React from 'react'

const Launch = props => {
    const launch = props.launch;

    return (
        <a href={`#/launches/${launch.flight_number}`} className="l-sub-6">
            <div>
                <img src={launch.links.mission_patch_small} />
            </div>
            <div className="l-sub-7">
                <h4>Mission Name:</h4>
                <p>{launch.mission_name}</p>
                <h4>Details:</h4>
                <div className="l-sub-8">
                    <p>{launch.details}</p>
                </div>
            </div>
        </a>
    )
}

export default Launch;