import React, { Component } from 'react'
import './navbar.css'
// import {MenuRoundedIcon} from '@material-ui/icons';
export default class navbar extends Component {
    render() {
        return (
            <div className="navbar-1">
             <img alt="logo" src="https://res.cloudinary.com/ankita1297/image/upload/v1610211093/Ankita_sm5pep.jpg"></img>
                <div className="nav-option">
                    <p>Home</p>
                    <p>Services</p>
                    <p>My Stories</p>
                    <p>My Skills</p>
                    <p>Portfolio</p>
                    <p>Reviews</p>
                </div>
                <button className="navbar-btn">Contact Me</button>
                {/* <MenuRoundedIcon /> */}
            </div>
        )
    }
}
