import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const CustomerRegistration = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    
    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
    })
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const validateForm = () => {
        let isValid = true
        const errors = {}
    
        if (formData.username.trim() === '') {
          errors.username = 'Username is required'
          isValid = false
        }
    
        if (formData.email.trim() === '') {
          errors.email = 'Email is required'
          isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid'
          isValid = false
        }
    
        if (formData.password.trim() === '') {
          errors.password = 'Password is required';
          isValid = false;
        } else if (formData.password.trim().length < 6) {
          errors.password = 'Password must be at least 6 characters long'
          isValid = false
        }
    
        setFormErrors(errors);
        return isValid;
      };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Form is valid, you can submit the data to your backend here
          console.log(formData);
          navigate("/login")
          
          // Reset the form after submission
          setFormData({
            username: '',
            email: '',
            password: ''
          })
          setFormErrors({
            username: '',
            email: '',
            password: ''
          })
        }
    };
    return ( 
        <div className="container f-form">
            <div className="user-register">
                <h3 className="form-title">Register</h3>
                <p>Kindly fill this form to register.</p>
                <form  onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label for="username">Username</label><br/>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.username && <span className="text-error">{formErrors.username}</span>}
                    </div>

                    <div className="form-section">
                        <label for="email">Email</label><br/>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.email && <span className="text-error">{formErrors.email}</span>}
                    </div>

                    <div className="form-section">
                        <label for="password">Password</label><br/>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.password && <span className="text-error">{formErrors.password}</span>}
                    </div>
                     

                    <div className="form-section">
                        <button type="submit">Register</button>
                        <small>Already have an account? <a href="/login" >Login </a> </small>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default CustomerRegistration;