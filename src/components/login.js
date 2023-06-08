import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        username: '',
        password: '',
        error: '',
    })

    const { username, password, error } = formData

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }
     // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation and authentication checks
        if (username === 'username' && password === 'password') {
            // Successful login logic
            console.log('Logged in successfully')
            navigate("/onboarding")
            } else {
            // Failed login logic
            setFormData({
                ...formData,
                error: 'Invalid username or password',
            })
            }
    };


    return (
        <div className="container f-form">
            <div className="user-register"> 
                <div className="form-title">
                    <h3>Login</h3>
                    <p>Kindly fill this form to login.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                    </ div>
                    <div className="form-section">
                        <label>Password:</label>
                            <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            />
                    </div>
                        {error && <p className="text-error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
     )
}
 
export default LoginForm