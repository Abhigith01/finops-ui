import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const recommendations = [
    { id: 1, title: 'Reduce VM Size', description: 'Consider resizing Standard_D4s_v3 to D2s_v3 for cost efficiency.' },
    { id: 2, title: 'Idle Resources', description: '4 VMs running under 5% CPU for 7+ days.' },
    { id: 3, title: 'Storage Cleanup', description: '12 unattached managed disks found in East US region.' },
];

const OptimizationRecommendations = () => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Optimization Recommendations
                </Typography>
                <List dense>
                    {recommendations.map((rec) => (
                        <ListItem key={rec.id} divider>
                            <ListItemText
                                primary={rec.title}
                                secondary={rec.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default OptimizationRecommendations;
