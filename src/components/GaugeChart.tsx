import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

interface GaugeChartProps {
    value: number;
    label: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, label }) => {
    const segments = [
        { value: 60, color: '#ef5350' },
        { value: 30, color: '#ffca28' },
        { value: 10, color: '#66bb6a' }
    ];

    const RADIAN = Math.PI / 180;


    const getNeedleCoord = (value: number, radius: number) => {
        const angle = 180 - (value / 100) * 180;
        const x = 200 / 2 + radius * Math.cos(-angle * RADIAN);
        const y = 140 / 2 + radius * Math.sin(-angle * RADIAN);
        return { x, y };
    };


    const getDotColor = (v: number) => {
        if (v >= 90) return '#66bb6a'; 
        if (v >= 60) return '#ffca28';
        return '#ef5350';             
    };

    const dotPos = getNeedleCoord(value, 60);
    const dotColor = getDotColor(value);

    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent sx={{ px: 2, py: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {label}
                </Typography>

                <Box position="relative" width={200} height={140} mx="auto" mt={1}>
                    <PieChart width={200} height={140}>
                        <Pie
                            data={segments}
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={70}
                        >
                            {segments.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                 
                    <Box
                        sx={{
                            position: 'absolute',
                            top: dotPos.y - 5,
                            left: dotPos.x - 5,
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            border: `3px solid ${dotColor}`,
                        }}
                    />



                    <Box position="absolute" top="55%" left="50%" sx={{ transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <Typography variant="h6" fontWeight="bold">{value}%</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {label === 'Team Collaboration' ? 'Collaboration Rate' : 'Compliance Rate'}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GaugeChart;
