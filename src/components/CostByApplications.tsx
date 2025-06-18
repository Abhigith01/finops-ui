import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { quarter: 'Q1', Az1: 40000, Az2: 35000, Az3: 30000, Az4: 28000, Az5: 25000 },
    { quarter: 'Q2', Az1: 39000, Az2: 32000, Az3: 31000, Az4: 27000, Az5: 26000 },
    { quarter: 'Q3', Az1: 35000, Az2: 30000, Az3: 28000, Az4: 26000, Az5: 24000 },
    { quarter: 'Q4', Az1: 40000, Az2: 34000, Az3: 29000, Az4: 28000, Az5: 25000 },
];

const CostByApplications = () => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Cost By Applications
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} barSize={14}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis tickFormatter={(value) => `$${value}`} />
                        <Tooltip formatter={(value: number) => [`$${value}`, '']} />
                        <Legend />
                        <Bar dataKey="Az1" fill="#42a5f5" name="Az-ap-0001" />
                        <Bar dataKey="Az2" fill="#ab47bc" name="Az-ap-0002" />
                        <Bar dataKey="Az3" fill="#26c6da" name="Az-ap-0003" />
                        <Bar dataKey="Az4" fill="#66bb6a" name="Az-ap-0004" />
                        <Bar dataKey="Az5" fill="#ffca28" name="Az-ap-0005" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default CostByApplications;
