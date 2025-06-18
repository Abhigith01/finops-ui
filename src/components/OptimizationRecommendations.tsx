import React from 'react';
import {
    Card, CardContent, Typography, Box, Avatar,
    List, ListItem, ListItemAvatar, ListItemText, Stack, Divider
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import ComputerIcon from '@mui/icons-material/Computer';

const recommendations = [
    {
        id: 1,
        icon: <ComputerIcon sx={{ color: '#1e88e5' }} />,
        title: 'VM-name-code-01',
        description: 'Resize or shut down under-utilised VMs',
        amount: 820,
    },
    {
        id: 2,
        icon: <StorageIcon sx={{ color: '#1e88e5' }} />,
        title: 'Move data to lower cost tier',
        description: 'Storage_Ac1',
        amount: 245,
    },
    {
        id: 3,
        icon: <DnsIcon sx={{ color: '#1e88e5' }} />,
        title: 'Delete unused SQL databases',
        description: 'SQL-001',
        amount: 180,
    },
];

const OptimizationRecommendations = () => {
    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Optimization Recommendations
                </Typography>


                <Stack direction="row" justifyContent="space-between" mb={1} px={1}>
                    <Typography variant="body2" fontWeight={400}>
                        Name/ID
                    </Typography>
                    <Typography variant="body2" fontWeight={400}>
                        Saving Opportunity
                    </Typography>
                </Stack>

                <Divider />

                <List disablePadding>
                    {recommendations.map((rec) => (
                        <ListItem
                            key={rec.id}
                            divider
                            sx={{
                                alignItems: 'flex-start',
                                py: 1.5,
                                px: 0,
                                '& .MuiListItemText-primary': { fontWeight: 600 },
                                '& .MuiListItemText-secondary': { fontSize: '0.75rem', color: 'text.secondary' },
                            }}
                            secondaryAction={
                                <Typography fontWeight={600} color="success.main">
                                    ${rec.amount}
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        bgcolor: '#e0e0e0',
                                        fontSize: '0.75rem',
                                    }}
                                    variant="rounded"
                                >
                                    {rec.icon}
                                </Avatar>
                            </ListItemAvatar>
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
