import React, { useState } from 'react';
import { Button, TextField, Box, Typography, CircularProgress } from '@mui/material';
import { observer } from 'mobx-react';

import { useNavigate } from 'react-router-dom';
import AuthStore from '../auth/AuthStore';
import { APIGetUserByToken, APISignIn } from '../../../api/api';

export const SignInPage = observer(() => {
    const navigate = useNavigate();
    // const [email, setEmail] = useState('user2334@gmail.com');
    // const [password, setPassword] = useState('apapunitu');
    const [email, setEmail] = useState('orgAdmin@gmail.com');
    const [password, setPassword] = useState('password123');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        const result = await APISignIn({ email, password });
        AuthStore.signIn({ token: result.token, user: result.user });
        navigate('/');
        setLoading(false);
    };

    const getToken = async () => {
        console.log('gettoken');
        const user = await APIGetUserByToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJlbWFpbCI6Im9yZ0FkbWluQGdtYWlsLmNvbSIsInJvbGVJZCI6NCwidXNlcklkIjoxMCwiaWF0IjoxNjkzNzE2ODk2LCJleHAiOjE2OTM3NjAwOTZ9.qo9JR_99KRfqSjOqZQ9VD6yd4zOQi4RJkul9xikG7Yo');
        console.log(user);
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            className="p-3"
        >
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" gutterBottom>
                    Sign In
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    margin="normal"
                />
                {/* <Box mt={2}> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    className='w-100 mt-4'
                >
                    {isLoading ? <CircularProgress size={24} /> : 'Sign In'}
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    className='w-100 mt-4'
                    onClick={getToken}
                >
                    get token
                </Button>
            </form>
        </Box>
    );
});