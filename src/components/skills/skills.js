import React, { Component } from 'react'
import './skills.css'
import {VictoryPie} from 'victory';
export default class skills extends Component {
    render() {
        return (
            <div className='skills-wrapper'>
                <div className="skills-head">
                <p className='skills-heading'>My Skills</p>
                <p className='skill-def'>I am using various digital tools for my servvices. Most are adobe product.
                    check out my skill level from below graph.
                </p>
                </div>
                <div className='skill-percent'>
                    <div>
                    <svg width={200} height={200}>
                    <text x={100} y={100} textAnchor="middle" >
                        70%
                    </text>
                    
                    <VictoryPie
                    padAngle={0}
                        standalone={false}
                        labelComponent={<span/>}
                        width={200} height={200}
                        innerRadius={75}
                        data={[{'key': "", 'y': 70}, {'key': "", 'y': (100-70)} ]}
                        colorScale={["#19B3A6", "#EEEEEE" ]}
                    />
                    </svg>
                    <h5 className="sub-title">Javascript</h5>
</div>
<div>
                    <svg width={200} height={200}>
                    <text x={100} y={100} textAnchor="middle" >
                        70%
                    </text>
                
                    <VictoryPie
                    padAngle={0}
                        standalone={false}
                        labelComponent={<span/>}
                        width={200} height={200}
                        innerRadius={75}
                        data={[{'key': "", 'y': 70}, {'key': "", 'y': (100-70)} ]}
                        colorScale={["#19B3A6", "#EEEEEE" ]}
                    />
                    </svg>
                    <h5 className="sub-title">Javascript</h5>
                    </div>
                    <div>
                    <svg width={200} height={200}>
                    <text x={100} y={100} textAnchor="middle" >
                        70%
                    </text>
                    <VictoryPie
                    padAngle={0}
                        standalone={false}
                        labelComponent={<span/>}
                        width={200} height={200}
                        innerRadius={75}
                        data={[{'key': "", 'y': 70}, {'key': "", 'y': (100-70)} ]}
                        colorScale={["#19B3A6", "#EEEEEE" ]}
                    />
                    </svg>
                    <h5 className="sub-title">Javascript</h5>
                    </div>
                    <div>
                    <svg width={200} height={200}>
                    <text x={100} y={100} textAnchor="middle" >
                        70%
                    </text>
                    <VictoryPie
                    padAngle={0}
                        standalone={false}
                        labelComponent={<span/>}
                        width={200} height={200}
                        innerRadius={75}
                        data={[{'key': "", 'y': 70}, {'key': "", 'y': (100-70)} ]}
                        colorScale={["#19B3A6", "#EEEEEE" ]}
                    />
                    </svg>
                    <h5 className="sub-title">Javascript</h5>
                    </div>
                    <div>
                    <svg width={200} height={200}>
                    <text x={100} y={100} textAnchor="middle" >
                        70%
                    </text>
                    <VictoryPie
                    padAngle={0}
                        standalone={false}
                        labelComponent={<span/>}
                        width={200} height={200}
                        innerRadius={75}
                        data={[{'key': "", 'y': 70}, {'key': "", 'y': (100-70)} ]}
                        colorScale={["#19B3A6", "#EEEEEE" ]}
                    />
                    </svg>
                    <h5 className="sub-title">Javascript</h5>
                    </div>
                </div>
            </div>
        )
    }
}
