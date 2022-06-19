import React from 'react';
import './Chart.css'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart" style={{height:"230px"}}>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={800}
                    height={360}
                    data={data}
                  
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey={dataKey} />
                    <Tooltip />
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
