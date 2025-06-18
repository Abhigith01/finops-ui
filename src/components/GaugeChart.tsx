import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

interface GaugeChartProps {
    value: number; // Value between 0 to 100
    label: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, label }) => {
    const angle = (value / 100) * 180;

    const getColor = (v: number) => {
        if (v < 60) return '#ef5350';      // Red
        if (v < 90) return '#ffeb3b';      // Yellow
        return '#66bb6a';                 // Green
    };

    const gaugeData = [
        { value: value },
        { value: 100 - value }
    ];

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {label}
                </Typography>
                <PieChart width={180} height={120}>
                    <Pie
                        data={gaugeData}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={0}
                        dataKey="value"
                    >
                        <Cell fill={getColor(value)} />
                        <Cell fill="#e0e0e0" />
                    </Pie>
                </PieChart>
                <Box textAlign="center" mt={-1}>
                    <Typography variant="h5" fontWeight="bold">{value}%</Typography>
                    <Typography variant="caption" color="textSecondary">
                        {label === 'Team Collaboration' ? 'Collaboration Rate' : 'Compliance Rate'}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GaugeChart;
