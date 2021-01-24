import React, { Component } from 'react'
import './services.css'
import '../../styles/button.css'
export default class services extends Component {
    render() {
        return (
            <div className='services-wrapper'>
                <div className='services-introduction'>
                    <p className='heading'>My Services</p>
                    <p>I am a highly experieced web developer.I also provide photography and audiography 
                        services.I have done a lot of design projects of big organizations as well as various similar startups.
                        I love to help those people who want a creative and modern looking website design.
                    </p>
                    <button className='intro-btn'>Hire Me</button>
                </div>
                <div className='services-brief'>
                       <div className='web-service'>
                          <p className='web-1'>web Development</p>
                          <p className='web-2'>
                          This file is part of the libisofs project; you can redistribute it and/or
                          modify it under the terms of the GNU General Public License version 2 
                          or later as published by the Free Software Foundation.See COPYING file for details.
                              </p>
                       </div> 
                       <div className='web-service'>
                        <p className='web-1'>App Development</p>
                        <p className='web-2'>
                        This file is part of the libisofs project; you can redistribute it and/or
                          modify it under the terms of the GNU General Public License version 2 
                          or later as published by the Free Software Foundation.See COPYING file for details.
                       </p>
                       </div> 
                </div>
            </div>
        )
    }
}
