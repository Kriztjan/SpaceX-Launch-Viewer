import React from 'react';

const BookedLaunch = props => {
    const launch = props.launch;
    return (
        <div className="b-sub-5">
           <p><span>Mission Name:</span> {launch.name}</p>
           <p><span>Launch Date:</span> {launch.date}</p>
           <p><span>Rocket:</span> {launch.rocket}</p>
           <p><span>Mission Details:</span></p>
           <div className="b-sub-6">
                <p>{launch.details}</p>
           </div>

           <div className="b-sub-7">
                <button 
                    onClick={ e => props.toggleEdit(launch.id) }
                    style={ props.editing ? { visibility: "hidden" } : { visibility: "visible" } } 
                >
                    Edit
                </button>
                <button 
                    style={ props.editing ? { visibility: "hidden" } : { visibility: "visible" } } 
                    onClick={ e => props.removeLaunch(launch.id) }
                >
                    Remove
                </button>
           </div>
        </div>
    )
}

export default BookedLaunch;