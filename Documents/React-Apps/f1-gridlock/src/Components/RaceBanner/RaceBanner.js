import React from "react";
import './RaceBanner.css';
import saudi_flag from "../../Images/flags/saudi_flag.jpeg";

export class RaceBanner extends React.Component {
    render() {
        return (
            <button className="RaceBanner">
                <div className="CircuitInfo-cont">
                    <h1 className="Race-country">Saudi Arabia</h1>
                    <figure className="Banner-flag-cont">
                        <img className="Banner-flag" src={saudi_flag} alt="" />
                    </figure>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        )
    }
}