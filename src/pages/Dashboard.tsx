import React from 'react';
import {
    Typography, Box, FormControl, InputLabel, Select, MenuItem,
    Grid, Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // assuming this is your context path
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
        <Box p={3}>
            {/* Header with Logout */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Overview</Typography>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                </Button>
            </Box>

            {/* Filters */}
            <Box display="flex" gap={2} mb={3}>
                <FormControl size="small">
                    <InputLabel>Period</InputLabel>
                    <Select defaultValue="Quarterly-2024" label="Period">
                        <MenuItem value="Quarterly-2024">Quarterly-2024</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small">
                    <InputLabel>Product Line</InputLabel>
                    <Select defaultValue="All" label="Product Line">
                        <MenuItem value="All">All</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small">
                    <InputLabel>Application</InputLabel>
                    <Select defaultValue="All" label="Application">
                        <MenuItem value="All">All</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Stat Cards */}
            <Grid container spacing={2} mb={3}>
                <Grid size={2.4}><StatCard label="Total Cloud Spend" value="$120,000" chip="-5%" negative /></Grid>
                <Grid size={2.4}><StatCard label="Cost Savings Potential" value="$15,000" chip="+8%" positive /></Grid>
                <Grid size={2.4}><StatCard label="Active Cost Anomalies" value="5 Alerts" /></Grid>
                <Grid size={2.4}><StatCard label="Utilization Efficiency" value="78%" chip="+3%" positive /></Grid>
                <Grid size={2.4}><StatCard label="Untagged Resources" value="3,875" chip="-0.9%" negative /></Grid>
            </Grid>

            {/* Charts */}
            <Grid container spacing={2} mb={3}>
                <Grid size={6}><CostByApplications /></Grid>
                <Grid size={6}><CostVsBudgetChart /></Grid>
            </Grid>

            {/* Summary & Gauges */}
            <Grid container spacing={2}>
                <Grid size={3}><CostOptimizationSummary /></Grid>
                <Grid size={5}><OptimizationRecommendations /></Grid>
                <Grid size={2}><GaugeChart label="Policy compliance" value={89} /></Grid>
                <Grid size={2}><GaugeChart label="Team Collaboration" value={94} /></Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
