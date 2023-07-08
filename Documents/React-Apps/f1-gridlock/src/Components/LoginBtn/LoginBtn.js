import React from "react";
import './LoginBtn.css';

export class LoginBtn extends React.Component {
    render() {
        return (
            <button className="LoginBtn">
                <i class="fa-regular fa-user"></i>
                <span className="LoginText">Login</span>
            </button>
        )
    }
}