import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {},
    };
  }

  validateForm = () => {
    const { name, email, password } = this.state;
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!emailRegex.test(email)) errors.email = 'Invalid email format';
    if (!password.trim()) errors.password = 'Password is required';

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert('Form submitted successfully!');
      console.log(this.state);
      this.setState({ name: '', email: '', password: '', errors: {} });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder='Enter Your Name'
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder='Enter Your Email'
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder='Enter Your Passworrd'
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
