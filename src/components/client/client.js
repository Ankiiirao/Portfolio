import React, { Component } from 'react'
import './client.css'
export default class client extends Component {
    render() {
        return (
            
            <div className='skills-wrapper'>
                <div className="skills-head">
                <p className='skills-heading'>What my client says</p>
                <p className='skill-def'>I am using various digital tools for my servvices. Most are adobe product.
                    check out my skill level from below graph.
                </p>
                </div>
                <div className='client-wrapper'>
                   <div className='clients'>
                       <h4>Anthony D'souza</h4>
                     <p>A review is an evaluation of a publication, service, or company such as a 
                         movie, video game, musical composition, book; a piece of hardware like a car,
                          home appliance, or computer; or an event or performance, such as a live music
                           concert, play, musical theater show, dance show, or art exhibition.</p>
                   </div>
                   <div className='clients'>
                   <h4>Mark Spencer</h4>
                   <p>A review is an evaluation of a publication, service, or company such as a 
                         movie, video game, musical composition, book; a piece of hardware like a car,
                          home appliance, or computer; or an event or performance, such as a live music
                           concert, play, musical theater show, dance show, or art exhibition.</p>  
                   </div>
                   <div className='clients'>
                   <h4>Omanshu Sharma</h4>
                   <p>A review is an evaluation of a publication, service, or company such as a 
                         movie, video game, musical composition, book; a piece of hardware like a car,
                          home appliance, or computer; or an event or performance, such as a live music
                           concert, play, musical theater show, dance show, or art exhibition.</p> 
                   </div>
                </div>
            </div>
        )
    }
}
