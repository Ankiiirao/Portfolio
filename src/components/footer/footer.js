import React, { Component } from 'react'
import '../../styles/button.css'
import './footer.css'
export default class footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-1">
                    <h2 className="footer-title">I am available for new projects.Want to work with me?</h2>
                    <button className="intro-btn" >Hire Me</button>
                </div>
                <div className="footer-2">
                    <div >
                      <p className="footer-info">Phone : </p>
                      <p className="footer-info">+91-999999999</p>
                    </div>
                    <div>
                        <p className="footer-info">Email :</p>
                        <p className="footer-info">ankita@gmail.com</p>
                        </div>
                        <div>
                        <p className="footer-info">Address :</p>
                        <p className="footer-info">New Delhi</p>
                        </div>
                </div>
            </div>
        )
    }
}
