import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
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
            style={{
                backgroundImage: `url('/bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Paper elevation={6} sx={{ padding: 4, width: 350 }}>
                <Box textAlign="center" mb={2}>
                    <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                    Sign in to your account
                </Typography>

                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
                        label="Remember me"
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Sign In
                    </Button>
                </form>

                <Box textAlign="right" mt={1}>
                    <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                        Forgot password?
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default SignInPage;
