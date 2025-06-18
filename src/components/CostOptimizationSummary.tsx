import React from 'react';
import {
    Card, CardContent, Typography, Box, Stack
} from '@mui/material';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const pieData = [
    { name: 'Underutilized', value: 4000 },
    { name: 'Orphan', value: 3000 },
    { name: 'Oversized', value: 2000 },
    { name: 'Undersized', value: 1500 },
    { name: 'Untagged', value: 1200 },
];

const COLORS = ['#42a5f5', '#66bb6a', '#ffa726', '#ab47bc', '#26c6da'];

const CostOptimizationSummary = () => {
    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Cost Optimization Summary
                </Typography>


                <Box display="flex" justifyContent="space-between" mb={2}>
                    <Box>
                        <Typography variant="body2" color="textSecondary">
                            Current Cost
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                            $48,253
                        </Typography>
                        <Typography variant="caption" color="error">
                            ▼ 11.2%
                        </Typography>
                    </Box>
                    <Box textAlign="right">
                        <Typography variant="body2" color="textSecondary">
                            Potential Savings
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                            $3,582
                        </Typography>
                        <Typography variant="caption" color="success.main">
                            ▲ 11.2%
                        </Typography>
                    </Box>
                </Box>


                <Box display="flex" alignItems="center" mt={2}>

                    <Box width="50%" position="relative" height={200}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={55}
                                    outerRadius={70}
                                    paddingAngle={2}
                                    stroke="none"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            sx={{ transform: 'translate(-50%, -50%)', textAlign: 'center' }}
                        >
                            <Typography variant="h6" fontWeight="bold">
                                87,4532
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                Total Resources
                            </Typography>
                        </Box>
                    </Box>

                    <Box width="50%" pl={2}>
                        <Stack spacing={1}>
                            {pieData.map((item, index) => (
                                <Stack direction="row" alignItems="center" spacing={1} key={item.name}>
                                    <Box
                                        width={12}
                                        height={12}
                                        borderRadius="50%"
                                        sx={{ backgroundColor: COLORS[index] }}
                                    />
                                    <Typography variant="caption">{item.name}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CostOptimizationSummary;
