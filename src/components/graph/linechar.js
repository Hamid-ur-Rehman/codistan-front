'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required to register all elements, scales, etc.

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
        },
        {
            label: 'My Second Dataset',
            data: [45, 49, 60, 71, 46, 35, 20],
            fill: false,
            borderColor: 'rgba(153,102,255,1)',
            tension: 0.1
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sample Line Chart'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const MyLineChart = (props) => {
    return (
        <Line
            data={data}
            options={options}
            {...props}
        />
    );
};

export default MyLineChart;
