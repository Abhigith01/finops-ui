import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    FormControlLabel,
    Checkbox,
    InputAdornment,
    IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // prevent page reload
        // Dummy validation
        if (email === 'admin@gmail.com' && password === 'admin123') {
            localStorage.setItem('authToken', 'dummy-token');
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{
                background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
                minHeight: '100vh',
                backgroundImage: `url('/bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    px: 5,
                    py: 4,
                    width: 370,
                    borderRadius: 3,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    backdropFilter: 'blur(4px)'
                }}
            >
                <Box textAlign="center" mb={2}>
                    <img src="/logo.png" alt="Logo" style={{ height: 54, marginBottom: 8 }} />
                </Box>
                <Typography variant="h5" fontWeight={700} color="primary" textAlign="center" mb={1}>
                    Welcome Back
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" textAlign="center" mb={2}>
                    Sign in to your account
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        autoComplete="email"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon color="primary" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((show) => !show)}
                                        edge="end"
                                        size="small"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                        <FormControlLabel
                            control={<Checkbox checked={true} onChange={(e) => setRemember(e.target.checked)} />}
                            label="Remember me"
                            sx={{ ml: 0 }}
                        />
                        <Typography
                            variant="body2"
                            color="primary"
                            sx={{ cursor: 'pointer', fontWeight: 500 }}
                        >
                            Forgot password?
                        </Typography>
                    </Box>
                    {error && (
                        <Typography color="error" fontSize={14} mt={1} mb={1}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            mt: 2,
                            py: 1.2,
                            fontWeight: 700,
                            fontSize: 16,
                            borderRadius: 2,
                            boxShadow: '0 2px 8px 0 rgba(33, 203, 243, 0.12)'
                        }}
                    >
                        Sign In
                    </Button>
                </form>
                <Box textAlign="center" mt={3}>
                    <Typography variant="body2" color="text.secondary">
                        Don't have an account?{' '}
                        <span style={{ color: '#2196f3', fontWeight: 500, cursor: 'pointer' }}>
                            Contact Admin
                        </span>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default SignInPage;
