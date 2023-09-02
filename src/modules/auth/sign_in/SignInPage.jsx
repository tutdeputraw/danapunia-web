import React, { useState } from 'react';
import { Button, TextField, Box, Typography, CircularProgress } from '@mui/material';
import { observer } from 'mobx-react';

import { useNavigate } from 'react-router-dom';
import AuthStore from '../auth/AuthStore';
import { APISignIn } from '../../../api/api';
import { routeDashboardOrganizationAdmin, routeDashboardPendharmaPunia } from '../../../routes/AppRouteName';

export const SignInPage = observer(() => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        const result = await APISignIn({ email, password });
        AuthStore.setUserAndToken({ token: result.token, user: result.user });
        setLoading(false);

        if (result.user.PendharmaPunia != null) {
            navigate(routeDashboardPendharmaPunia);
        } else if (result.user.OrganizationAdmin != null) {
            navigate(routeDashboardOrganizationAdmin);
        } else {
            navigate('*');
        }
    };

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
            </form>
        </Box>
    );
});