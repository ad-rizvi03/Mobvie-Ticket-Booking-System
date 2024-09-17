// src/pages/UserLoginPage.js

import React, { useState } from 'react';
import userService from '../services/userService';

const UserLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await userService.login(username, password);
            console.log('Logged in user:', user);
            // Redirect or handle successful login
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (show message, clear form, etc.)
        }
    };

    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UserLoginPage;
