import React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Achieved', value: 18500 },
    { name: 'Potential', value: 19500 },
];

const COLORS = ['#66bb6a', '#ffa726'];

const CostOptimizationSummary = () => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Cost Optimization Summary
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Box width="60%">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="green">
                            ${data[0].value.toLocaleString()}
                        </Typography>
                        <Typography variant="body2">Achieved</Typography>
                        <Typography variant="h6" color="orange">
                            ${data[1].value.toLocaleString()}
                        </Typography>
                        <Typography variant="body2">Potential</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CostOptimizationSummary;
