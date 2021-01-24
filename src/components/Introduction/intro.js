import React, { Component } from 'react'
import './intro.css'
import '../../styles/button.css'
export default class intro extends Component {
    render() {
        return (
            <div className="intro-1">
                <img alt="..." className="img-logo" src="https://res.cloudinary.com/ankita1297/image/upload/v1611048254/IMG-20201212-WA0005_wri0wl.jpg"></img>
              <div className="into-wrapper">
               <p className="intro-p">Hello , I am</p> 
               <h1 className="intro-h1">Ankita Yadav</h1>
               <p className="intro-p">React js developer</p> 
               <button className="intro-btn">Get Started</button>
              </div>
            </div>
        )
    }
}
