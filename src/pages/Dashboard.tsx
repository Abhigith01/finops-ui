import React from 'react';
import {
    Typography, Box, FormControl, Select, MenuItem,
    Grid, Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StatCard from '../components/StatCard';
import CostByApplications from '../components/CostByApplications';
import CostVsBudgetChart from '../components/CostVsBudgetChart';
import CostOptimizationSummary from '../components/CostOptimizationSummary';
import OptimizationRecommendations from '../components/OptimizationRecommendations';
import GaugeChart from '../components/GaugeChart';

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Box p={3} sx={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Overview</Typography>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                </Button>
            </Box>

            <Box display="flex" gap={2} mb={3}>

                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">
                        Period:
                    </Typography>
                    <FormControl size="small" sx={{ minWidth: 180 }}>
                        <Select defaultValue="Quarterly-2024">
                            <MenuItem value="Quarterly-2024">Quarterly-2024</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2" sx={{ minWidth: 80 }}>
                        Product Line:
                    </Typography>
                    <FormControl size="small" sx={{ minWidth: 180 }}>
                        <Select defaultValue="All">
                            <MenuItem value="All">All</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2" sx={{ minWidth: 80 }}>
                        Application:
                    </Typography>
                    <FormControl size="small" sx={{ minWidth: 180 }}>
                        <Select defaultValue="All">
                            <MenuItem value="All">All</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>


            <Grid container spacing={2} mb={3}>
                <Grid size={2.4}><StatCard label="Total Cloud Spend" value="$120,000" chip="-5%" cardColor='#F44336' negative /></Grid>
                <Grid size={2.4}><StatCard label="Cost Savings Potential" value="$15,000" chip="+8%" cardColor='#4CAF50'  positive /></Grid>
                <Grid size={2.4}><StatCard label="Active Cost Anomalies" value="5 Alerts" /></Grid>
                <Grid size={2.4}><StatCard label="Utilization Efficiency" value="78%" chip="+3%" cardColor='#4CAF50'  positive /></Grid>
                <Grid size={2.4}><StatCard label="Untagged Resources" value="3,875" chip="-0.9%" cardColor='#F44336'  negative /></Grid>
            </Grid>


            <Grid container spacing={2} mb={3}>
                <Grid size={7}><CostByApplications /></Grid>
                <Grid size={5}><CostVsBudgetChart /></Grid>
            </Grid>


            <Grid container spacing={2} alignItems="stretch">
                <Grid size={4}>
                    <Box height="100%">
                        <CostOptimizationSummary />
                    </Box>
                </Grid>
                <Grid size={5}>
                    <Box height="100%">
                        <OptimizationRecommendations />
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Grid container direction="column" spacing={2} style={{ height: '100%' }}>
                        <Grid style={{ flex: 1 }}>
                            <GaugeChart label="Policy compliance" value={89} />
                        </Grid>
                        <Grid style={{ flex: 1 }}>
                            <GaugeChart label="Team Collaboration" value={94} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Box>
    );
};

export default Dashboard;
