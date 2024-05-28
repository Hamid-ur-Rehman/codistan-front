'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Required to register all elements, scales, etc.

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'Dataset 2',
            data: [45, 49, 60, 71, 46, 35, 20],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
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
            text: 'Sample Bar Chart'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const MyBarChart = (props) => {
    return (
        <Bar
            data={data}
            options={options}
            {...props}
        />
    );
};

export default MyBarChart;
