import React, { useState } from 'react';
import {
    Typography, Box, FormControl, Select, MenuItem,
    Grid, Button, Drawer, AppBar, Toolbar, IconButton, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Tooltip, ListItemButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StatCard from '../components/StatCard';
import CostByApplications from '../components/CostByApplications';
import CostVsBudgetChart from '../components/CostVsBudgetChart';
import CostOptimizationSummary from '../components/CostOptimizationSummary';
import OptimizationRecommendations from '../components/OptimizationRecommendations';
import GaugeChart from '../components/GaugeChart';
import { ReactComponent as SidebarSettingsIcon } from '../assets/Settings-Icon.svg';
import { ReactComponent as HamburgerIcon } from '../assets/Hamburger-Icon.svg';
import { ReactComponent as SidebarTimeIcon } from '../assets/Time-Icon.svg';
import { ReactComponent as SidebarUsersIcon } from '../assets/User-Icon.svg';
import { ReactComponent as SidebarDocIcon } from '../assets/Reports-Icon.svg';
import { ReactComponent as NotificationSvgIcon } from '../assets/Notification-Icon.svg';
import { ReactComponent as GridViewIcon } from '../assets/GridView-Icon.svg';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


const SidebarAddIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2196f3" strokeWidth="2"/>
        <path d="M12 8v8M8 12h8" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const [period, setPeriod] = useState('Quarterly-2024');
    const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs().startOf('year'));
    const [toDate, setToDate] = useState<Dayjs | null>(dayjs());

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>

            <Drawer
                variant="permanent"
                sx={{
                    width: 54,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 54,
                        boxSizing: 'border-box',
                        background: '#fff',
                        overflow: 'hidden',
                    },
                }}
            >
                <Toolbar sx={{ minHeight: 64 }}>
                    <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 700 }}>
                        NeuFinOps
                    </Typography>
                </Toolbar>
                <Divider />
                <List sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <Box>
                        <ListItem disablePadding>
                            <ListItemButton selected sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <GridViewIcon width={22} height={22} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <SidebarUsersIcon width={22} height={22} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <SidebarTimeIcon width={22} height={22} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <SidebarDocIcon width={22} height={22} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                    <Box>
                        <Divider sx={{ my: 1 }} />
                        <ListItem disablePadding>
                            <ListItemButton sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <SidebarAddIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ justifyContent: 'center', py: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                    <SidebarSettingsIcon width={22} height={22} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </List>
            </Drawer>

            <Box sx={{ flexGrow: 1, pl: 1 }}>

                <AppBar position="fixed" color="inherit" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ml: `${54}px` }}>
                    <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <IconButton color="inherit" edge="start" sx={{ mr: 1 }}>
                                <HamburgerIcon width={24} height={24} />
                            </IconButton>
                            <Typography variant="h6" color="primary" fontWeight={700}>
                                NeuFinOps
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <Tooltip title="Notifications">
                                <IconButton>
                                    <NotificationSvgIcon width={22} height={22} />
                                </IconButton>
                            </Tooltip>
                            <Avatar sx={{ bgcolor: '#2196f3', width: 28, height: 28, fontSize: 16, fontWeight: 700 }}>A</Avatar>
                            <Button variant="outlined" color="error" onClick={handleLogout} sx={{ ml: 2 }}>
                                Logout
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>


                <Box p={3} sx={{ mt: '64px' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Typography variant="h5">Overview for Cloud Architecture</Typography>
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box display="flex" gap={2} mb={3}>

                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="body2">
                                    Period:
                                </Typography>
                                <FormControl size="small" sx={{ minWidth: 120 }}>
                                    <Select value={period} onChange={e => setPeriod(e.target.value)}>
                                        <MenuItem value="Quarterly-2024">Quarterly-2024</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="body2">From:</Typography>
                                <DatePicker
                                    value={fromDate}
                                    onChange={newValue => {
                                        setFromDate(newValue);
                                        if (toDate && newValue && newValue.isAfter(toDate)) {
                                            setToDate(newValue);
                                        }
                                    }}
                                    maxDate={toDate || undefined}
                                    slotProps={{ textField: { size: 'small', sx: { minWidth: 100 } } }}
                                />
                                <Typography variant="body2">To:</Typography>
                                <DatePicker
                                    value={toDate}
                                    onChange={newValue => {
                                        setToDate(newValue);
                                        if (fromDate && newValue && newValue.isBefore(fromDate)) {
                                            setFromDate(newValue);
                                        }
                                    }}
                                    minDate={fromDate || undefined}
                                    slotProps={{ textField: { size: 'small', sx: { minWidth: 100 } } }}
                                />
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="body2" sx={{ minWidth: 80 }}>
                                    Business Unit:
                                </Typography>
                                <FormControl size="small" sx={{ minWidth: 120 }}>
                                    <Select defaultValue="All">
                                        <MenuItem value="All">All</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="body2" sx={{ minWidth: 80 }}>
                                    Application:
                                </Typography>
                                <FormControl size="small" sx={{ minWidth: 120 }}>
                                    <Select defaultValue="All">
                                        <MenuItem value="All">All</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </LocalizationProvider>


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
            </Box>
        </Box>
    );
};

export default Dashboard;
