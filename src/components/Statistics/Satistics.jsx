import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Satistics = () => {
    const localStorageDonation = JSON.parse(localStorage.getItem('localStorageDonation')) || [];
    const data = 12;
    const totalDonation = localStorageDonation.length;
    const YourDonation = ((100 * totalDonation) / data).toFixed(2);
    const TotalDonation = (100 - YourDonation).toFixed(2);

    const datas = [
        { name: 'Total Donation', value: parseFloat(TotalDonation) },
        { name: 'Your Donation', value: parseFloat(YourDonation) }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div>
            <h1>Your Donation: {YourDonation}, Total Donation: {TotalDonation}</h1>
            <h1>Donated in: {localStorageDonation.length}</h1>
            <div className='border-2'>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={datas}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#FF444A"
                            dataKey="value"
                            className='text-xs'
                        >
                            {datas.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Satistics;
