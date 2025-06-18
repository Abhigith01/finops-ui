import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, ReferenceLine, Cell
} from 'recharts';

const data = [
    { quarter: 'Q-1', cost: 23000 },
    { quarter: 'Q-2', cost: 27000 },
    { quarter: 'Q-3', cost: 21000 },
    { quarter: 'Q-4', cost: 31000 },
    { quarter: 'Q-1 2025', cost: 39000 },
];

const budget = 38280;

const CostVsBudgetChart = () => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Actual Cost Vs Budget
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                        <ReferenceLine
                            y={budget}
                            stroke="red"
                            strokeDasharray="3 3"
                            label={{
                                position: 'top',
                                value: `Budget $${budget.toLocaleString()}`,
                                fill: 'black',
                                fontSize: 16,
                                fontWeight: 700,
                            }}
                        />
                        <Bar dataKey="cost" barSize={30}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill="#42a5f5"
                                    fillOpacity={entry.cost > budget ? 0.4 : 1}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default CostVsBudgetChart;
