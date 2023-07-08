import React from "react";
import './TimeBanner.css';

export class TimeBanner extends React.Component {
    render() {
        return (
            <div className="Time-banner">
                <h2 className="Subheadings-white">Lights out:</h2>
                <p className="Timer-to-race">00:26:57</p>
            </div>
        )
    }
}