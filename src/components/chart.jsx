import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const Chart = props => {

    const data = props.city.list.map(item => ({temp: Math.round(item.main.temp - 273)}));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <YAxis />
                <Tooltip />
                <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
};

export default Chart;
